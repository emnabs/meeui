import { createNamespace, isObject, addUnit } from '../utils'
import { raf, cancelRaf } from '../utils/dom/raf'
import './style'
import Icon from '../icon' // Types

var _createNamespace = createNamespace('progress')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

var PERIMETER = 3140
var uid = 0

function format(rate) {
  return Math.min(Math.max(rate, 0), 100)
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0
  return (
    'M ' +
    viewBoxSize / 2 +
    ' ' +
    viewBoxSize / 2 +
    ' m 0, -500 a 500, 500 0 1, ' +
    sweepFlag +
    ' 0, 1000 a 500, 500 0 1, ' +
    sweepFlag +
    ' 0, -1000'
  )
}

export default createComponent({
  props: {
    text: String,
    size: [Number, String],
    color: {
      type: [String, Array, Function],
      default: ''
    },
    layerColor: String,
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    value: {
      type: Number,
      default: 0
    },
    valueUnit: {
      type: String,
      default: '%'
    },
    speed: {
      type: [Number, String],
      default: 0
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: [Number, String],
      default: 100
    },
    strokeWidth: {
      type: [Number, String],
      default: 6
    },
    clockwise: {
      type: Boolean,
      default: true
    },
    // element
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: val => ['success', 'exception', 'warning'].indexOf(val) > -1
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    format: Function
  },
  beforeCreate: function beforeCreate() {
    this.uid = 'mee-progress-gradient-' + uid++
  },
  computed: {
    style: function style() {
      var size = addUnit(this.size)
      return {
        width: size,
        height: size
      }
    },
    path: function path() {
      return getPath(this.clockwise, this.viewBoxSize)
    },
    viewBoxSize: function viewBoxSize() {
      return +this.strokeWidth + 1000
    },
    layerStyle: function layerStyle() {
      return {
        fill: '' + this.fill,
        stroke: '' + this.layerColor,
        strokeWidth: this.strokeWidth + 'px'
      }
    },
    hoverStyle: function hoverStyle() {
      var offset = (PERIMETER * this.value) / 100
      return {
        stroke: '' + (this.gradient ? 'url(#' + this.uid + ')' : this.color),
        strokeWidth: +this.strokeWidth + 1 + 'px',
        strokeLinecap: this.strokeLinecap,
        strokeDasharray: offset + 'px ' + PERIMETER + 'px'
      }
    },
    gradient: function gradient() {
      return isObject(this.color)
    },
    LinearGradient: function LinearGradient() {
      var _this = this

      var h = this.$createElement

      if (!this.gradient) {
        return
      }

      var Stops = Object.keys(this.color)
        .sort(function (a, b) {
          return parseFloat(a) - parseFloat(b)
        })
        .map(function (key, index) {
          return h('stop', {
            key: index,
            attrs: {
              offset: key,
              'stop-color': _this.color[key]
            }
          })
        })
      return h('defs', [
        h(
          'linearGradient',
          {
            attrs: {
              id: this.uid,
              x1: '100%',
              y1: '0%',
              x2: '0%',
              y2: '0%'
            }
          },
          [Stops]
        )
      ])
    },
    // element
    barStyle() {
      const style = {}
      style.width = this.percentage + '%'
      style.backgroundColor = this.getCurrentColor(this.percentage)
      return style
    },
    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1)
    },
    radius() {
      if (this.type === 'circle' || this.type === 'dashboard') {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2)
      } else {
        return 0
      }
    },
    trackPath: function trackPath() {
      const radius = this.radius
      const isDashboard = this.type === 'dashboard'
      return `
        M 50 50
        m 0 ${isDashboard ? '' : '-'}${radius}
        a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
        a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
        `
    },
    perimeter() {
      return 2 * Math.PI * this.radius
    },
    rateMe() {
      return this.type === 'dashboard' ? 0.75 : 1
    },
    strokeDashoffset() {
      const offset = (-1 * this.perimeter * (1 - this.rateMe)) / 2
      return `${offset}px`
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rateMe}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      }
    },
    scalePathAttributes() {
      var scales = []
      var scaleSize = 10
      var scaleWidth = 1
      var scaleLength = (this.perimeter * this.rateMe) / scaleSize - scaleWidth
      for (var i = 0; i < scaleSize; i++) {
        scales.push(scaleWidth)
        scales.push(scaleLength)
      }
      scales.push(scaleWidth)
      scales.push(this.perimeter * (1 - this.rateMe) - scaleWidth)
      var scalePoints = scales.join(',')
      return {
        'stroke-dasharray': scalePoints,
        'stroke-dashoffset': (-1 * this.perimeter * (1 - this.rateMe)) / 2
      }
    },
    scaleMinPathAttributes() {
      var scales = []
      var scaleSize = 100
      var scaleWidth = 0.5
      var scaleLength = (this.perimeter * this.rateMe) / scaleSize - scaleWidth
      for (var i = 0; i < scaleSize; i++) {
        scales.push(scaleWidth)
        scales.push(scaleLength)
      }
      scales.push(scaleWidth)
      scales.push(this.perimeter * (1 - this.rateMe) - scaleWidth)
      var scalePoints = scales.join(',')
      return {
        'stroke-dasharray': scalePoints,
        'stroke-dashoffset': (-1 * this.perimeter * (1 - this.rateMe)) / 2
      }
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rateMe * (this.percentage / 100)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
      }
    },
    stroke() {
      let ret
      if (this.color) {
        ret = this.getCurrentColor(this.percentage)
      } else {
        switch (this.status) {
          case 'success':
            ret = '#13ce66'
            break
          case 'exception':
            ret = '#ff4949'
            break
          case 'warning':
            ret = '#e6a23c'
            break
          default:
            ret = '#20a0ff'
        }
      }
      return ret
    },
    iconClass() {
      if (this.status === 'warning') {
        return 'warning'
      }
      if (this.type === 'line') {
        return this.status === 'success' ? 'success' : 'error'
      } else {
        return this.status === 'success' ? 'shape-code-done' : 'shape-code-error'
      }
    },
    progressTextSize() {
      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 10
    },
    content() {
      var h = this.$createElement
      if (typeof this.format === 'function') {
        return this.format(this.percentage, h) || ''
      } else {
        var unit = this.valueUnit
        var context = [
          `${this.percentage}`
        ]
        if (unit) {
          context.push(h('small', unit))
          return h('div', {
            class: bem('text-inner')
          }, context)
        } else {
          return context
        }
      }
    }
  },
  watch: {
    rate: {
      handler: function handler(rate) {
        this.startTime = Date.now()
        this.startRate = this.value
        this.endRate = format(rate)
        this.increase = this.endRate > this.startRate
        this.duration = Math.abs(((this.startRate - this.endRate) * 1000) / this.speed)

        if (this.speed) {
          cancelRaf(this.rafId)
          this.rafId = raf(this.animate)
        } else {
          this.$emit('input', this.endRate)
        }
      },
      immediate: true
    }
  },
  methods: {
    getCurrentColor(percentage) {
      if (typeof this.color === 'function') {
        return this.color(percentage)
      } else if (typeof this.color === 'string') {
        return this.color
      } else {
        return this.getLevelColor(percentage)
      }
    },
    getLevelColor(percentage) {
      const colorArray = this.getColorArray().sort((a, b) => a.percentage - b.percentage)

      for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color
        }
      }
      return colorArray[colorArray.length - 1].color
    },
    getColorArray() {
      const color = this.color
      const span = 100 / color.length
      return color.map((seriesColor, index) => {
        if (typeof seriesColor === 'string') {
          return {
            color: seriesColor,
            percentage: (index + 1) * span
          }
        }
        return seriesColor
      })
    },
    genSvg() {
      var h = this.$createElement
      return h(
        'svg',
        {
          attrs: {
            viewBox: '0 0 100 100'
          }
        },
        [
          h('path', {
            attrs: {
              d: this.trackPath,
              fill: 'none',
              stroke: '#e5e9f2',
              'stroke-width': this.relativeStrokeWidth
            },
            class: bem('circle-track'),
            style: this.trailPathStyle
          }),
          h('path', {
            attrs: {
              d: this.trackPath,
              fill: 'none',
              stroke: this.stroke,
              'stroke-width': this.percentage ? this.relativeStrokeWidth : 0,
              'stroke-linecap': this.strokeLinecap
            },
            class: bem('circle-path'),
            style: this.circlePathStyle
          }),
          this.type === 'dashboard' &&
          h('path', {
            attrs: {
              d: this.trackPath,
              fill: 'none',
              stroke: '#e5e9f2',
              'stroke-width': this.relativeStrokeWidth * 2,
              ...this.scalePathAttributes
            }
          }),
          this.type === 'dashboard' &&
          h('path', {
            attrs: {
              d: this.trackPath,
              fill: 'none',
              stroke: '#e5e9f2',
              'stroke-width': this.relativeStrokeWidth / 2,
              ...this.scaleMinPathAttributes
            }
          })
        ]
      )
    },
    genLine() {
      var h = this.$createElement
      return h(
        'div',
        {
          class: bem('bar')
        },
        [
          h(
            'div',
            {
              class: bem('bar-outer'),
              style: {
                height: addUnit(this.strokeWidth)
              }
            },
            [
              h(
                'div',
                {
                  class: bem('bar-inner'),
                  style: this.barStyle
                },
                [
                  this.showText &&
                  this.textInside &&
                  h(
                    'div',
                    {
                      class: bem('bar-inner-text')
                    },
                    this.content
                  )
                ]
              )
            ]
          )
        ]
      )
    },
    genCircle() {
      var h = this.$createElement
      return h(
        'div',
        {
          class: bem('circle'),
          style: {
            height: addUnit(this.width),
            width: addUnit(this.width)
          }
        },
        [this.genSvg()]
      )
    },
    genContent: function genContent() {
      var textSlot = this.slots('text')
      if (textSlot) {
        return textSlot
      } else {
        return this.content
      }
    },
    genText() {
      if (this.showText && !this.textInside) {
        var h = this.$createElement
        return h(
          'div',
          {
            class: bem('text'),
            style: {
              fontSize: addUnit(this.progressTextSize)
            }
          },
          [
            !this.status
              ? this.genContent()
              : h(Icon, {
                class: bem('text-icon'),
                attrs: {
                  name: this.iconClass,
                  color: this.status
                }
              })
          ]
        )
      }
    },
    animate: function animate() {
      var now = Date.now()
      var progress = Math.min((now - this.startTime) / this.duration, 1)
      var rate = progress * (this.endRate - this.startRate) + this.startRate
      this.$emit('input', format(parseFloat(rate.toFixed(1))))
      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = raf(this.animate)
      }
    }
  },
  render: function render() {
    var h = arguments[0]
    return h(
      'div',
      {
        class: [
          bem([this.type, !this.showText && 'without-text', this.textInside && 'text-inside']),
          this.status ? 'is-' + this.status : ''
        ],
        attrs: {
          role: 'progressbar',
          'aria-valuenow': this.percentage,
          'aria-valuemin': '0',
          'aria-valuemax': '100'
        }
      },
      [
        this.type === 'line' ? this.genLine() : this.genCircle(),
        this.genText(),
        this.slots('footer') &&
        h(
          'div',
          {
            class: bem('footer')
          },
          [this.slots('footer')]
        )
      ]
    )
  }
})

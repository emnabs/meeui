import { createNamespace, addUnit, isDef } from '../utils'
import { THEME_COLORS } from '../utils/theme'
import { formatNumber } from '../utils/format/number'
import dayjs from 'dayjs'
// style moved to centralized theme entry

var _createNamespace = createNamespace('clock')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: {
    value: {
      type: [Number, String, Object, Date],
      default: () => {
        return new Date()
      }
    },
    width: {
      type: [Number, String],
      default: ''
    },
    timeFormat: {
      type: String,
      default: 'lll'
    },
    theme: String,
    color: String
  },
  computed: {
    clockStyle: function clockStyle() {
      var style = {}
      if (isDef(this.width)) {
        style.width = addUnit(this.width)
      }
      return style
    },
    scaleStyle() {
      var scale = formatNumber(this.width) / 300
      return {
        transform: `scale(${scale})`
      }
    }
  },
  data: function data() {
    return {
      now: new Date()
    }
  },
  mounted() {
    // 调用$nextTick函数
    this.$nextTick(() => {
      // this.dateTime = new Date()
      this.initClock()
    })
  },
  methods: {
    setRemain: function setRemain(remain) {
      this.now = dayjs(remain).format(this.timeFormat)
      this.$emit('change', remain)
    },
    initClock: function initClock() {
      var _this = this
      var dynamic = this.$refs['dial']
      var hourElement = this.$refs['hour'] // container.querySelector('.clock-anchor--hour')
      var minuteElement = this.$refs['minute'] // container.querySelector('.clock-anchor--minute')
      var secondElement = this.$refs['second'] // container.querySelector('.clock-anchor--second')
      var minute = function (n) {
        return n % 5 === 0 ? hourLine(n) : minuteLine(n)
      }
      var hourLine = function (n) {
        var anchor = document.createElement('div')
        anchor.className = bem('anchor') // 'clock-anchor'
        var element = document.createElement('div')
        element.className = bem('dial', ['hour']) // 'clock-dial__hour'
        rotate(anchor, n)
        anchor.appendChild(element)
        dynamic.appendChild(anchor)
      }
      var minuteLine = function (n) {
        var anchor = document.createElement('div')
        anchor.className = bem('anchor')
        var element = document.createElement('div')
        element.className = bem('dial', ['minute'])
        rotate(anchor, n)
        anchor.appendChild(element)
        dynamic.appendChild(anchor)
      }
      var hour = function (n) {
        var element = document.createElement('div')
        element.className = bem('hour', ['' + n])
        element.innerHTML = n
        position(element, n / 12, 115)
        dynamic.appendChild(element)
      }
      var position = function (element, phase, r) {
        var theta = phase * 2 * Math.PI
        element.style.top = (-r * Math.cos(theta)).toFixed(1) + 'px'
        element.style.left = (r * Math.sin(theta)).toFixed(1) + 'px'
      }
      var rotate = function (element, second) {
        element.style.transform = element.style.webkitTransform = 'rotate(' + second * 6 + 'deg)'
      }
      var animate = () => {
        var now = new Date()
        var time =
          now.getHours() * 3600 +
          now.getMinutes() * 60 +
          now.getSeconds() * 1 +
          now.getMilliseconds() / 1000
        _this.setRemain(now)
        rotate(secondElement, time)
        rotate(minuteElement, time / 60)
        rotate(hourElement, time / 60 / 12)
        requestAnimationFrame(animate)
      }
      for (var i = 1; i <= 60; i++) minute(i)
      for (var j = 1; j <= 12; j++) hour(j)
      animate()
    },
    genTimeText: function genTimeText() {
      var slot = this.slots('default')
      if (slot) {
        return slot
      }
      return null
    },
    genExtras: function genExtras() {
      var _this = this
      var slot = _this.slots('extras')
      if (slot) {
        return slot
      }
      var h = _this.$createElement
      return h('div', {
        class: bem('extras'),
        style: this.scaleStyle
      }, [
        h('div', {
          class: bem('brand')
        }, [
          'YOUMBE'
        ]),
        h('div', {
          class: bem('datetime')
        }, [
          '' + _this.now
        ])
      ])
    },
    genClock: function genClock() {
      var h = this.$createElement
      var content = []
      content.push(
        h('div', {
          ref: 'dial',
          class: bem('dial')
        })
      )
      content.push(
        h('div', {
          class: bem('pad', ['base'])
        })
      )
      content.push(
        h('div', {
          ref: 'hour',
          class: bem('anchor', ['hour'])
        })
      )
      content.push(
        h('div', {
          ref: 'minute',
          class: bem('anchor', ['minute'])
        })
      )
      content.push(
        h('div', {
          ref: 'second',
          class: bem('anchor', ['second'])
        })
      )
      content.push(
        h('div', {
          class: bem('pad', ['top'])
        })
      )
      return h(
        'div',
        {
          class: bem('panel'),
          style: this.clockStyle
        },
        [
          this.genExtras(),
          h(
            'div',
            {
              class: bem('plate'),
              style: this.scaleStyle
            },
            content
          )
        ]
      )
    }
  },
  render: function render() {
    var h = arguments[0]
    var size = this.size
    var theme = this.theme
    var color = this.color

    var classes = [size, theme, this.uniformSize ? 'uniform' : '']
    if (size) {
      classes[size] = size
    }
    var styles = {}
    if (isDef(color)) {
      if (THEME_COLORS.indexOf(color) !== -1) {
        classes.push(color)
      } else {
        styles.color = color
      }
    }

    return h(
      'div',
      {
        class: [bem(classes)],
        style: styles
      },
      [this.genClock(), this.genTimeText()]
    )
  }
})

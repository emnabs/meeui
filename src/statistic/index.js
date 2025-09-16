import _extends from '@babel/runtime/helpers/esm/extends'
import numeral from 'numeral'

// Utils
import { createNamespace, addUnit, isDef } from '../utils'
import { routeProps } from '../utils/router'
import { statisticProps } from './shared'
// Components
import './style'
import Icon from '../icon'

var _createNamespace = createNamespace('statistic')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: _extends({}, statisticProps, routeProps),

  computed: {
    numeralFormat() {
      var format = []
      if (this.thousand) {
        format.push('0,0')
      } else {
        format.push('0')
      }
      const arr = Array(this.precision).fill('0')
      format.push('.')
      if (arr.length) {
        format.push(arr.join(''))
      } else {
        format.push('[00]')
      }
      return format.join('')
    },
    valueText() {
      var numeralValue = numeral(this.value)
      if (numeralValue.value() !== null) {
        return numeralValue.format(this.numeralFormat)
      } else {
        return this.value
      }
    },
    overValueText() {
      if (isDef(this.overValue)) {
        var numeralValue = numeral(this.overValue)
        if (numeralValue.value() !== null) {
          return numeralValue.format(this.numeralFormat)
        } else {
          return this.overValue
        }
      }
      return ''
    },
    differenceValue() {
      if (isDef(this.overValue)) {
        var currentValue = numeral(this.value).value()
        var previousValue = numeral(this.overValue).value()
        if (currentValue !== null && previousValue !== null) {
          return (currentValue - previousValue)
        }
      }
      return null
    },
    offsetRate() {
      if (this.differenceValue !== null) {
        if (this.valueUnit === '%') {
          return this.differenceValue / 100
        } else {
          var previousValue = numeral(this.overValue).value()
          if (previousValue !== null && previousValue !== 0) {
            return (this.differenceValue / previousValue)
          }
        }
      }
      return null
    },
    offsetRateText() {
      return this.offsetRate !== null && numeral(Math.abs(this.offsetRate)).format(this.rateNumeralFormat) || ''
    }
  },
  data() {
    return {
      rateNumeralFormat: '0.0[0]%'
    }
  },
  mounted() {
  },
  methods: {
    genTitleBox: function genTitleBox() {
      var h = this.$createElement
      const { title } = this
      var slot = this.slots('title')
      return h(
        'div',
        {
          class: bem('title')
        },
        [slot || title]
      )
    },
    genValueUnit: function genValueUnit() {
      var h = this.$createElement
      const { valueUnit, unitClass } = this
      var slot = this.slots('unit')

      const showUnit = slot || isDef(valueUnit)

      if (showUnit) {
        return h(
          'small',
          {
            class: [bem('value-unit'), unitClass]
          },
          [slot || valueUnit]
        )
      }
    },
    genContentBox: function genContentBox() {
      var h = this.$createElement
      const { valueText, titleClass, titleStyle } = this
      var slot = this.slots('default')
      return h(
        'div',
        {
          class: [
            bem('content'),
            titleClass
          ],
          style: titleStyle
        },
        [slot || [
          h(
            'span',
            {
              class: bem('value')
            },
            valueText
          ), this.genValueUnit()
        ]]
      )
    },

    genFloatIcon: function genFloatIcon() {
      var h = this.$createElement
      const { differenceValue, floatIcon, iconBlock, iconPrefix, iconColor } = this
      var slot = this.slots('floatIcon')
      if (slot) {
        return slot
      }
      if (floatIcon) {
        return !iconBlock
          ? h(Icon, {
            class: bem('float-icon'),
            attrs: {
              name: floatIcon,
              classPrefix: iconPrefix,
              color: iconColor
            }
          })
          : h(
            'div',
            {
              class: bem('float-icon', 'block'),
              style: {}
            },
            [
              h(Icon, {
                attrs: {
                  name: floatIcon,
                  classPrefix: iconPrefix,
                  color: iconColor
                }
              })
            ]
          )
      } else if (differenceValue !== null) {
        return h(
          'span',
          {
            class: [bem('arrow', differenceValue >= 0 ? 'up' : 'down')]
          }
        )
      } else {
        return null
      }
    },
    genFloatValueBox: function genFloatValueBox() {
      var h = this.$createElement
      const { offsetRateText } = this
      var floatSlot = this.slots('floatValue')
      const showFloat = floatSlot || offsetRateText
      const floatIcon = this.genFloatIcon()
      if (showFloat) {
        const nodes = []
        if (floatIcon) {
          nodes.push(this.genFloatIcon())
        }
        nodes.push(
          h(
            'div',
            {
              class: bem('float-value')
            },
            floatSlot || offsetRateText
          )
        )
        return nodes
      }
    },

    genLabel: function genLabel() {
      var h = this.$createElement
      const { label, labelClass } = this

      var slot = this.slots('label')
      const showLabel = slot || isDef(label)

      if (showLabel) {
        return h(
          'div',
          {
            class: [bem('label'), labelClass]
          },
          [slot || label]
        )
      }
    },

    genBottomBox: function genBottomBox() {
      var h = this.$createElement
      const { label, offsetRateText } = this
      var bottomSlot = this.slots('bottom')
      var labelSlot = this.slots('label')
      var floatValueSlot = this.slots('floatValue')
      var floatValueBox = this.genFloatValueBox()
      const showBottom = bottomSlot || labelSlot || isDef(label) || floatValueSlot || offsetRateText
      if (showBottom) {
        return h(
          'div',
          {
            class: bem('bottom')
          },
          bottomSlot || [
            floatValueBox && this.genLabel(),
            floatValueBox
          ]
        )
      }
    }
  },

  render: function render() {
    var h = arguments[0]

    var size = this.size
    var type = this.type

    var classes = {
      center: this.center,
      required: this.required,
      vertical: this.vertical,
      borderless: !this.border,
      reverse: this.reverse,
      transparent: this.transparent
    }

    if (size) {
      classes[size] = size
    }

    if (type) {
      classes[type] = type
    }

    if (this.flexFill) {
      classes['flex-' + this.flexFill] = true
    }

    var styles = []
    if (this.ratio > 0) {
      let ratio = 100
      ratio /= this.ratio
      styles.push({
        '--scalebox-ratio': ratio + '%'
      })
    }
    if (this.width) {
      styles.push({
        '--scalebox-width': addUnit(this.width)
      })
    }

    return h(
      'div',
      {
        class: bem(classes),
        style: styles,
        attrs: {
        }
      },
      [this.genTitleBox(), this.genContentBox(), this.genBottomBox()]
    )
  }
})

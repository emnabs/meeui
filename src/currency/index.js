// import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef, convertCurrency } from '../utils'
import { THEME_COLORS } from '../utils/theme'


// import { inherit } from '../utils/functional' // Types
import './style'

var _createNamespace = createNamespace('currency')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: {
    value: {
      type: [Number, String, Object],
      default: ''
    },
    size: String,
    color: String,
    symbol: {
      type: [String],
      default: '¥'
    },
    sign: {
      type: Boolean,
      default: false
    },
    beforeText: {
      type: String,
      default: ''
    },
    thousand: {
      type: Boolean,
      default: true
    },
    afterText: {
      type: String,
      default: ''
    },
    precision: {
      type: Number,
      default: 2
    },
    deciamlStrictly: {
      type: Boolean,
      default: false
    },
    uniformSize: {
      type: Boolean,
      default: false
    },
    capital: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    capitalText() {
      if (this.capital && this.priceValue) {
        return convertCurrency(this.priceValue)
      }
      return ''
    },
    priceValue() {
      let priceString = this.value
      if (typeof this.value === 'string') {
        priceString = priceString.replace(/[^-?\d.]/gi, '')
      }
      return parseFloat(priceString)
    },
    price() {
      let priceNumber = this.priceValue
      if (isNaN(priceNumber)) {
        return null
      }
      var precision = this.precision
      if (this.deciamlStrictly) {
        priceNumber = this.formatFloat(priceNumber, precision + 3)
      } else {
        priceNumber = priceNumber.toFixed(precision)
      }
      if (this.thousand) {
        priceNumber = priceNumber
          .toString()
          .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      }
      var priceArr = priceNumber.split('.')
      return {
        integer: priceArr[0] || '0',
        precision: (priceArr[1] || '0').padEnd(precision, '0')
      }
    }
  },
  data() {
    return {
      priceText: ''
    }
  },
  mounted() {
    if (typeof this.value === 'string') {
      this.priceText = this.value.replace(/[0-9.,-]/g, '')
    }
  },
  methods: {
    formatFloat: function formatFloat(f, digit) {
      var m = Math.pow(10, digit + 1)
      return parseInt(f * m, 10) / m
    },
    genBeforeText: function genBeforeText() {
      var h = this.$createElement
      var beforeText = this.slots('beforeText') || this.beforeText
      if (beforeText) {
        return h(
          'span',
          {
            class: bem('before-text')
          },
          [beforeText]
        )
      }
    },
    genContent: function genContent() {
      var h = this.$createElement
      var slot = this.slots()
      if (slot) {
        return slot
      }
      var content = []
      if (this.price) {
        if (this.symbol) {
          content.push(
            h(
              'span',
              {
                class: bem('symbol')
              },
              [this.symbol]
            )
          )
        }
        content.push(
          h(
            'span',
            {
              class: bem('value')
            },
            [this.price.integer]
          )
        )
        if (this.precision > 0) {
          content.push(
            h(
              'span',
              {
                class: bem('precision')
              },
              [this.price.precision]
            )
          )
        }
      }
      if (this.priceText) {
        content.push(
          h(
            'span',
            {
              class: bem('text')
            },
            [this.priceText]
          )
        )
      }
      if (this.afterText) {
        content.push(
          h(
            'span',
            {
              class: bem('after-text')
            },
            [this.afterText]
          )
        )
      }
      return content
    },
    capitalContent: function capitalContent() {
      var h = this.$createElement
      var capitalText = this.slots('captialText') || this.capitalText
      if (capitalText) {
        return h(
          'span',
          {
            class: bem('captial-text')
          },
          [capitalText]
        )
      }
    }
  },
  render: function render() {
    var h = arguments[0]
    var size = this.size
    var sign = this.sign
    var color = this.color

    var classes = [size, this.uniformSize ? 'uniform' : '']
    if (size) {
      classes[size] = size
    }
    if (sign) {
      if (this.priceValue >= 0) {
        classes.push('positive')
      } else {
        classes.push('negative')
      }
    }
    var styles = {}
    if (isDef(color)) {
      if (THEME_COLORS.indexOf(color) !== -1) {
        classes.push(color)
      } else {
        styles.color = color
      }
    }
    var currencyBox = [this.genBeforeText(), this.genContent()]
    if (isDef(this.capitalText)) {
      classes.push('capital')
      currencyBox = [
        h(
          'div',
          {
            class: bem('number')
          },
          currencyBox
        ),
        this.capitalContent()
      ]
    }
    return h(
      'div',
      {
        class: [bem(classes)],
        style: styles
      },
      currencyBox
    )
  }
})

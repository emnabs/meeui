import { createNamespace } from '../utils'
import { padZero } from '../utils/format/string'
// style moved to centralized theme entry

var _createNamespace = createNamespace('coupon')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]
var t = _createNamespace[2]

function formatTimeStamp (timeStamp) {
  // compatible when the timestamp is seconds
  if (timeStamp < Math.pow(10, 12)) {
    return timeStamp * 1000
  }
  return +timeStamp
}

function getDate (timeStamp) {
  var date = new Date(formatTimeStamp(timeStamp))
  return date.getFullYear() + '.' + padZero(date.getMonth() + 1) + '.' + padZero(date.getDate())
}

function formatDiscount (discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1)
}

function formatAmount (amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2)
}

export default createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod () {
      var _this$coupon = this.coupon
      var startAt = _this$coupon.startAt
      var endAt = _this$coupon.endAt
      var customValidPeriod = _this$coupon.customValidPeriod
      return customValidPeriod || getDate(startAt) + ' - ' + getDate(endAt)
    },
    faceAmount: function faceAmount () {
      var coupon = this.coupon

      if (coupon.valueDesc) {
        return coupon.valueDesc + '<span>' + (coupon.unitDesc || '') + '</span>'
      }

      if (coupon.denominations) {
        var denominations = formatAmount(coupon.denominations)
        return '<span>' + this.currency + '</span> ' + denominations
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(coupon.discount))
      }

      return ''
    },
    conditionMessage: function conditionMessage () {
      var condition = formatAmount(this.coupon.originCondition)
      return condition === '0' ? t('unlimited') : t('condition', condition)
    }
  },
  render: function render () {
    var h = arguments[0]
    var coupon = this.coupon
    var disabled = this.disabled
    var description = (disabled && coupon.reason) || coupon.description
    return h(
      'div',
      {
        class: bem({
          disabled: disabled
        })
      },
      [
        h(
          'div',
          {
            class: bem('content')
          },
          [
            h(
              'div',
              {
                class: bem('head')
              },
              [
                h('h2', {
                  class: bem('amount'),
                  domProps: {
                    innerHTML: this.faceAmount
                  }
                }),
                h(
                  'p',
                  {
                    class: bem('condition')
                  },
                  [this.coupon.condition || this.conditionMessage]
                )
              ]
            ),
            h(
              'div',
              {
                class: bem('body')
              },
              [
                h(
                  'p',
                  {
                    class: bem('name')
                  },
                  [coupon.name]
                ),
                h(
                  'p',
                  {
                    class: bem('valid')
                  },
                  [this.validPeriod]
                )
              ]
            )
          ]
        ),
        description &&
          h(
            'p',
            {
              class: bem('description')
            },
            [description]
          )
      ]
    )
  }
})

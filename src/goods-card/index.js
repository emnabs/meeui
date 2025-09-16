import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef } from '../utils'
import { emit, inherit } from '../utils/functional' // Components

import Tag from '../tag'
import Image from '../image' // Types
// style moved to centralized theme entry

var _createNamespace = createNamespace('goods-card')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function GoodsCard(h, props, slots, ctx) {
  var _slots$priceTop

  var thumb = props.thumb
  var showNum = slots.num || isDef(props.num)
  var showPrice = slots.price || isDef(props.price)
  var showOriginPrice = slots['origin-price'] || isDef(props.originPrice)
  var showBottom = showNum || showPrice || showOriginPrice || slots.bottom

  function onThumbClick(event) {
    emit(ctx, 'click-thumb', event)
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h(
        'div',
        {
          class: bem('tag')
        },
        [
          slots.tag
            ? slots.tag()
            : h(
              Tag,
              {
                attrs: {
                  mark: true,
                  type: 'danger'
                }
              },
              [props.tag]
            )
        ]
      )
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      var styleContainer = {}
      if (props.thumbRatio) {
        styleContainer['aspect-ratio'] = props.thumbRatio
        styleContainer['width'] = 'auto'
      }
      return h(
        'a',
        {
          attrs: {
            href: props.thumbLink
          },
          class: bem('thumb'),
          style: styleContainer,
          on: {
            click: onThumbClick
          }
        },
        [
          slots.thumb
            ? slots.thumb()
            : h(Image, {
              attrs: {
                src: thumb,
                ratio: props.thumbRatio,
                width: '100%',
                height: '100%',
                fit: 'cover',
                'lazy-load': props.lazyLoad
              }
            }),
          ThumbTag()
        ]
      )
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title()
    }

    if (props.title) {
      return h(
        'div',
        {
          class: [bem('title'), 'mee-ellipsis--2']
        },
        [props.title]
      )
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc()
    }

    if (props.desc) {
      return h(
        'div',
        {
          class: [bem('desc'), 'mee-ellipsis']
        },
        [props.desc]
      )
    }
  }

  function formatPriceNumber(number, decimal = 2) {
    let priceNumber = number
    if (typeof priceNumber === 'string') {
      priceNumber = priceNumber.replace(/[^\d.]/gi, '')
    }
    var price = parseFloat(priceNumber)
    if (isNaN(price)) {
      return null
    }
    if (decimal === false) {
      return {
        integer: price,
        decimal: 0
      }
    }
    var priceArr = price
      .toFixed(decimal)
      .toString()
      .split('.')
    return {
      integer: priceArr[0],
      decimal: priceArr[1]
    }
  }

  function PriceContent() {
    var price = formatPriceNumber(props.price, props.decimal)
    if (price) {
      return [
        h(
          'span',
          {
            class: bem('price-currency')
          },
          [props.currency]
        ),
        h(
          'span',
          {
            class: bem('price-integer')
          },
          [price.integer]
        ),
        '.',
        h(
          'span',
          {
            class: bem('price-decimal')
          },
          [price.decimal]
        )
      ]
    }
  }

  function Price() {
    if (showPrice) {
      return h(
        'div',
        {
          class: bem('price')
        },
        slots.price ? [slots.price()] : PriceContent()
      )
    }
  }

  function OriginPrice() {
    if (showOriginPrice && props.originPrice) {
      var slot = slots['origin-price']
      return h(
        'div',
        {
          class: bem('origin-price')
        },
        [slot ? slot() : props.currency + props.originPrice]
      )
    }
  }

  function Num() {
    if (showNum) {
      return h(
        'div',
        {
          class: bem('num')
        },
        [slots.num ? slots.num() : props.numPrefix + props.num]
      )
    }
  }

  function Bottom() {
    return h(
      'div',
      {
        class: bem('bottom')
      },
      [
        (_slots$priceTop = slots['price-top']) == null
          ? void 0
          : _slots$priceTop.call(slots),
        h(
          'div',
          {
            class: bem('bottom-inner')
          },
          [
            h(
              'div',
              {
                class: bem('bottom-price')
              },
              [
                Price(),
                OriginPrice()
              ]
            ),
            Num()
          ]
        ),
        slots.bottom == null ? void 0 : slots.bottom()
      ]
    )
  }

  function Footer() {
    if (slots.footer) {
      return h(
        'div',
        {
          class: bem('footer')
        },
        [slots.footer()]
      )
    }
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem()
      },
      inherit(ctx, true)
    ]),
    [
      h(
        'div',
        {
          class: bem('header')
        },
        [
          Thumb(),
          h(
            'div',
            {
              class: bem('content', {
                centered: props.centered
              })
            },
            [
              h('div', [Title(), Desc(), slots.tags == null ? void 0 : slots.tags()]),
              showBottom && Bottom()
            ]
          )
        ]
      ),
      Footer()
    ]
  )
}

GoodsCard.props = {
  tag: String,
  desc: String,
  thumb: String,
  thumbRatio: {
    type: Number,
    default: 1
  },
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  decimal: {
    type: Number,
    default: 2
  },
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  },
  numPrefix: {
    type: String,
    default: 'x'
  }
}
export default createComponent(GoodsCard)

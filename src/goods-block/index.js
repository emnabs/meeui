import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef } from '../utils'
import { emit, inherit } from '../utils/functional' // Components

import Tag from '../tag'
import Image from '../image' // Types
import './style'

import Icon from '../icon' // Types
import Currency from '../currency' // Types

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false
}

var _createNamespace = createNamespace('goods-block')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function GoodsBlock(h, props, slots, ctx) {
  var _slots$priceTop

  var thumb = props.thumb
  var showNum = slots.num || isDef(props.num)
  var showPrice = slots.price || isDef(props.price)
  var showOriginPrice = slots['origin-price'] || isDef(props.originPrice)
  var showBottom = showNum || showPrice || showOriginPrice || slots.bottom

  function onThumbClick(event) {
    emit(ctx, 'click-thumb', event)
  }

  function Badge() {
    if (slots.badge || props.badge) {
      return h(
        'div',
        {
          class: bem('badge')
        },
        [
          slots.badge
            ? slots.badge()
            : h(
              Tag,
              {
                attrs: {
                  mark: true,
                  type: 'danger'
                }
              },
              [props.badge]
            )
        ]
      )
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h(
        'a',
        {
          attrs: {
            href: props.thumbLink
          },
          class: bem('thumb'),
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
                width: '100%',
                height: '100%',
                fit: 'cover',
                'lazy-load': props.lazyLoad
              }
            }),
          Badge()
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
          class: [
            bem('title'),
            props.titleInner ? bem('title-inner') : 'mee-ellipsis'
          ]
        },
        [props.title]
      )
    }
  }

  function Tags() {
    if (slots.tags) {
      return slots.tags()
    }
    if (props.titleInner || !props.showTitle) {
      return null
    }
    var tags = props.tags
    if (typeof tags === 'string') {
      tags = [tags]
    }
    if (Array.isArray(tags) && tags.length > 0) {
      return h(
        'div',
        {
          class: bem('tags')
        },
        tags.map(tag => {
          return isImage(tag)
            ? h(Image, {
              attrs: {
                src: tag,
                fit: 'cover',
                'lazy-load': props.lazyLoad
              }
            })
            : h(
              Tag,
              {
                attrs: {
                  mark: true,
                  type: 'danger',
                  size: 'small'
                }
              },
              [tag]
            )
        })
      )
    }
  }

  function AddIcon() {
    if (slots.addIcon) {
      return slots.addIcon()
    }
    if (props.addIcon) {
      return h(Icon, {
        class: bem('add-icon'),
        attrs: {
          name: props.addIcon,
          classPrefix: props.iconPrefix,
          color: props.iconColor
        }
      })
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

  function PriceContent() {
    return h(Currency, {
      attrs: {
        value: props.price,
        symbol: props.currency,
        deciamlStrictly: true,
        color: props.priceColor
      }
    })
  }

  function Price() {
    if (showPrice) {
      return h(
        'div',
        {
          class: bem('price')
        },
        [slots.price ? slots.price() : PriceContent()]
      )
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price']
      return h(
        'div',
        {
          class: bem('origin-price')
        },
        [slot ? slot() : props.currency + ' ' + props.originPrice]
      )
    }
  }

  function Header() {
    return h(
      'div',
      {
        class: bem('header')
      },
      [Thumb(), props.showTitle && Title()]
    )
  }

  function Content() {
    return h(
      'div',
      {
        class: bem('content', {
          centered: props.centered
        })
      },
      [
        Tags(),
        [
          (_slots$priceTop = slots['price-top']) == null
            ? void 0
            : _slots$priceTop.call(slots),
          Price()
        ],
        showBottom && [
          h(
            'div',
            {
              class: bem('bottom')
            },
            [OriginPrice(), Desc()]
          ),
          slots.bottom == null ? void 0 : slots.bottom()
        ]
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
  var styles = {}
  if (props.thumbRatio) {
    const ratio = Math.abs(props.thumbRatio)
    if (ratio !== 0) {
      styles['--goods-thumb-scale'] = `${100 / ratio}%`
    }
  }
  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem({
          centered: props.centered
        }),
        style: styles
      },
      inherit(ctx, true)
    ]),
    [Header(), Content(), Footer(), AddIcon()]
  )
}

GoodsBlock.props = {
  tags: [Array, String],
  badge: String,
  desc: String,
  thumb: String,
  title: String,
  addIcon: String,
  iconColor: String,
  showTitle: {
    type: Boolean,
    default: true
  },
  titleInner: Boolean,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  thumbRatio: Number,
  num: [Number, String],
  price: [Number, String],
  priceColor: {
    type: String,
    default: '#ff0000'
  },
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
}
export default createComponent(GoodsBlock)

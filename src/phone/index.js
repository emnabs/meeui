import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace } from '../utils'
import { inherit } from '../utils/functional' // Components

import './style'

var _createNamespace = createNamespace('phone')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function Phone(h, props, slots, ctx) {
  function Bright() {
    return h(
      'div',
      {
        class: bem('bright')
      },
      [
        h(
          'div',
          {
            class: bem('border')
          },
          [
            h(
              'div',
              {
                class: bem('screen')
              },
              [
                h('div', {
                  class: bem('datetime')
                }),
                h('div', {
                  class: bem('statebar')
                }),
                h('div', {
                  class: bem('home')
                }),
                Container()
              ]
            )
          ]
        )
      ]
    )
  }

  function Fringe() {
    return h(
      'div',
      {
        class: bem('fringe')
      },
      [
        h(
          'div',
          {
            class: bem('fringe-area')
          },
          [
            h('div', {
              class: bem('mobile-receiver')
            }),
            h('div', {
              class: bem('mobile-front-camera')
            })
          ]
        )
      ]
    )
  }

  function Buttons() {
    return [
      h('div', {
        class: bem('button', ['left', 'mute'])
      }),
      h('div', {
        class: bem('button', ['left', 'volume-up'])
      }),
      h('div', {
        class: bem('button', ['left', 'volume-down'])
      }),
      h('div', {
        class: bem('button', ['right', 'lock'])
      })
    ]
  }

  function Container() {
    var body
    if (slots.default) {
      var defaultSolt = slots.default()
      if (props.hiddenScrollBar) {
        defaultSolt = h(
          'div',
          {
            class: { hiddenScrollBar: props.hiddenScrollBar }
          },
          [slots.default()]
        )
      }
      body = h(
        'div',
        {
          class: bem('content')
        },
        [defaultSolt]
      )
    }
    return h(
      'div',
      {
        class: bem('container')
      },
      [body]
    )
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem([props.model])
      },
      inherit(ctx, true)
    ]),
    [
      h(
        'div',
        {
          class: bem('inner')
        },
        [
          h(
            'div',
            {
              class: bem('shape')
            },
            [Bright(), Fringe(), Buttons()]
          )
        ]
      )
    ]
  )
}

Phone.props = {
  tag: String,
  subtitle: String,
  icon: String,
  //
  search: {
    type: Boolean,
    default: false
  },
  searchPlaceholder: {
    type: String,
    default: '请输入搜索关键词'
  },
  model: {
    type: String,
    default: 'iphonex'
  },
  //
  title: String,
  leftIcon: String,
  leftText: String,
  leftArrow: {
    type: Boolean,
    default: false
  },
  rightIcon: String,
  rightText: String,
  iconPrefix: String,
  fixed: {
    type: Boolean,
    default: false
  },
  //
  menus: {
    type: Array,
    default: () => {
      return []
    }
  },
  activeMenu: {
    type: [Number, String],
    default: 1
  },
  //
  statusBar: {
    type: Boolean,
    default: true
  },
  statusBarWifi: {
    type: Boolean,
    default: true
  },
  battery: {
    type: String,
    default: '97%'
  },
  time: String,
  timeFormat: {
    type: String,
    default: 'LT'
  },
  //
  hiddenScrollBar: {
    type: Boolean,
    default: false
  },
  spacer: {
    type: Boolean,
    default: false
  },
  roundless: {
    type: Boolean,
    default: false
  },
  gutter: {
    type: Boolean,
    default: false
  }
}
export default createComponent(Phone)

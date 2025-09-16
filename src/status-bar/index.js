import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace } from '../utils'
import { inherit } from '../utils/functional' // Components
import dayjs from 'dayjs'
import './style'

var _createNamespace = createNamespace('status-bar')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function StatusBar(h, props, slots, ctx) {
  function Battery() {
    if (props.battery) {
      return h(
        'div',
        {
          class: bem('battery')
        },
        [
          h(
            'span',
            {
              class: bem('battery-text')
            },
            [props.battery]
          ),
          h('span', {
            class: bem('battery-icon')
          })
        ]
      )
    }
  }

  function Datetime() {
    return h(
      'div',
      {
        class: bem('time')
      },
      [props.time || dayjs().format(props.timeFormat)]
    )
  }

  function Signal() {
    return h(
      'div',
      {
        class: bem('signal')
      },
      [
        h(
          'div',
          {
            class: bem('signal-intensity')
          },
          [h('span'), h('span'), h('span'), h('span'), h('span')]
        ),
        Wifi()
      ]
    )
  }

  function Wifi() {
    if (props.wifi) {
      return h(
        'div',
        {
          class: bem('wifi')
        },
        [h('span'), h('span'), h('span'), h('span')]
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
    [Signal(), Datetime(), Battery()]
  )
}

StatusBar.props = {
  time: String,
  timeFormat: {
    type: String,
    default: 'LT'
  },
  battery: {
    type: String,
    default: '97%'
  },
  wifi: {
    type: Boolean,
    default: true
  }
}
export default createComponent(StatusBar)

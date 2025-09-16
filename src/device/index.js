import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef } from '../utils'
import { inherit } from '../utils/functional' // Components
import Navbar from '../nav-bar'
import Tabbar from '../tabbar'
import Icon from '../icon'
import TabbarItem from '../tabbar-item'
import StatusBar from '../status-bar' // Types
import Search from '../search' // Types

import './style'

var _createNamespace = createNamespace('device')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function Device (h, props, slots, ctx) {
  var showHeader = slots.header || isDef(props.title) || isDef(props.icon) || isDef(props.subtitle)
  var platform = props.platform

  function PageStatusBar () {
    if (props.statusBar) {
      return h(StatusBar, {
        attrs: {
          time: props.time,
          timeFormat: props.timeFormat,
          battery: props.battery,
          wifi: props.statusBarWifi
        }
      })
    }
  }

  function MpMenuButton () {
    console.log('platform', platform)
    if (platform === 'mp') {
      return h(
        'div',
        {
          class: bem('mp-button')
        },
        [
          h(Icon, {
            attrs: {
              name: 'elipsis'
            }
          }),
          h(Icon, {
            attrs: {
              name: 'radiobox'
            }
          })
        ]
      )
    }
  }

  function NavLeft() {
    if (slots.navLeft) {
      return slots.navLeft()
    }
  }

  function NavRight() {
    if (slots.navRight) {
      return slots.navRight()
    }
  }

  function SearchBarAction() {
    return h(Icon, {
      attrs: {
        name: props.rightIcon
      }
    })
  }

  function Header() {
    if (props.search) {
      if (slots.search) {
        return h(
          'div',
          {
            class: bem('search')
          },
          [slots.search()]
        )
      }
      return h(Search, {
        class: bem('search'),
        attrs: {
          shape: 'round',
          showAction: true,
          placeholder: props.searchPlaceholder
        },
        scopedSlots: {
          action: () => SearchBarAction()
        }
      })
    }
    if (showHeader) {
      if (slots.header) {
        return h(
          'div',
          {
            class: bem('header')
          },
          [slots.header()]
        )
      }
      return h(
        'div',
        {
          class: bem('header')
        },
        [
          h(Navbar, {
            attrs: {
              title: props.title,
              leftArrow: props.leftArrow,
              leftIcon: props.leftIcon,
              leftText: props.leftText,
              rightIcon: props.rightIcon,
              rightText: props.rightText
            },
            scopedSlots: {
              left: () => NavLeft(),
              right: () => NavRight()
            }
          })
        ]
      )
    }
  }

  function Body() {
    var styles = []
    if (props.background) {
      styles.push({
        background: props.background
      })
    }
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
      return h(
        'div',
        {
          class: bem('body'),
          style: styles
        },
        [defaultSolt]
      )
    }
  }

  function MenuBar() {
    var menus = props.menus.map(item => {
      return h(
        TabbarItem,
        {
          attrs: {
            icon: item.icon
          }
        },
        [item.text]
      )
    })
    return h(
      Tabbar,
      {
        class: bem('menu-bar'),
        attrs: {
          fixed: false,
          value: props.activeMenu
        }
      },
      menus
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
    if (props.menus.length > 0) {
      return h(
        'div',
        {
          class: bem('footer')
        },
        [MenuBar()]
      )
    }
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: [
          bem({
            stretch: props.stretch,
            roundless: props.roundless,
            spacer: props.spacer,
            square: props.square
          }),
          props.gutter && 'gutter-b'
        ]
      },
      inherit(ctx, true)
    ]),
    [PageStatusBar(), MpMenuButton(), Header(), Body(), Footer()]
  )
}

Device.props = {
  tag: String,
  subtitle: String,
  icon: String,
  background: [String, Object],
  platform: String,
  //
  search: {
    type: Boolean,
    default: false
  },
  searchPlaceholder: {
    type: String,
    default: '请输入搜索关键词'
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
export default createComponent(Device)

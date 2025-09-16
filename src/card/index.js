import _extends from '@babel/runtime/helpers/esm/extends'
import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef } from '../utils'
import { emit, inherit } from '../utils/functional'
import { routeProps, functionalRoute } from '../utils/router'
import Icon from '../icon' // Types
import './style'

var _createNamespace = createNamespace('card')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function Card(h, props, slots, ctx) {
  var _props$clickable
  var icon = props.icon
  var isLink = props.isLink
  var showHeader = props.showHeader && (slots.header || slots.title || isDef(props.title) || slots.icon || isDef(props.icon) || slots.subtitle || isDef(props.subtitle))

  function TitleIcon() {
    if (slots.icon) {
      return slots.icon()
    }

    if (icon) {
      return h('span', { class: bem('icon') }, [
        h(Icon, {
          attrs: {
            name: icon,
            classPrefix: props.iconPrefix
          }
        })
      ])
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title()
    }
    return h(
      'div',
      {
        class: [bem('title'), 'mee-ellipsis']
      },
      [
        TitleIcon(),
        h(
          'div',
          {
            class: bem('label', props.titleDirection)
          },
          [props.title, SubTitle()]
        )
      ]
    )
  }

  function SubTitle() {
    if (slots.subtitle) {
      return h(
        'div',
        {
          class: [bem('subtitle')]
        },
        [slots.subtitle()]
      )
    }
    if (props.subtitle) {
      return h(
        'small',
        {
          class: [bem('subtitle')]
        },
        [props.subtitle]
      )
    }
  }

  function Toolbar() {
    if (slots.toolbar) {
      return h(
        'div',
        {
          class: bem('toolbar')
        },
        [slots.toolbar()]
      )
    }
  }

  function Header() {
    if (showHeader) {
      var classes = bem('header', props.headerBorder && 'border')
      if (slots.header) {
        return h(
          'div',
          {
            class: classes
          },
          [slots.header()]
        )
      }
      return h(
        'div',
        {
          class: classes
        },
        [Title(), Toolbar()]
      )
    }
  }

  function Body() {
    if (slots.default) {
      return h(
        'div',
        {
          class: [bem('body'), props.bodyClass]
        },
        [slots.default()]
      )
    }
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

  function onClick(event) {
    emit(ctx, 'click', event)
    functionalRoute(ctx)
  }

  var styles = []
  if (props.background) {
    styles.push(props.background)
  }

  var clickable = (_props$clickable = props.clickable) != null ? _props$clickable : isLink
  return h(
    'div',
    _mergeJSXProps([
      {
        class: [
          bem({
            stretch: props.stretch,
            roundless: props.roundless,
            spacer: props.spacer,
            square: props.square,
            border: props.border,
            clickable: clickable
          }),
          props.gutter && 'gutter-b'
        ],
        style: styles,
        on: {
          click: onClick
        }
      },
      inherit(ctx, true)
    ]),
    [Header(), Body(), Footer()]
  )
}

var cardProps = {
  tag: String,
  subtitle: String,
  icon: String,
  iconPrefix: String,
  title: String,
  background: [String, Object],
  headerBorder: Boolean,
  border: Boolean,
  stretch: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  bodyClass: null,
  titleDirection: null,
  showHeader: {
    type: Boolean,
    default: true
  },
  spacer: {
    type: Boolean,
    default: false
  },
  isLink: Boolean,
  roundless: {
    type: Boolean,
    default: false
  },
  gutter: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: null
  }
}

Card.props = _extends({}, cardProps, routeProps)
export default createComponent(Card)

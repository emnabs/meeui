// Utils
import { createNamespace, isDef, addUnit } from '../utils'

import Icon from '../icon' // Types
import './style'

var _createNamespace = createNamespace('alert')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

const TYPE_ICONS_MAP = {
  success: 'mee-icon-success-o',
  warning: 'mee-icon-warn-o',
  error: 'mee-icon-fail-o',
  info: 'mee-icon-prompt'
}

export default createComponent({
  props: {
    title: String,
    description: [String, Array],
    type: {
      type: String,
      default: 'info'
    },
    size: String,
    closable: {
      type: Boolean,
      default: false
    },
    closeText: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    notice: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    icon: String,
    textColor: String,
    center: Boolean,
    effect: {
      type: String,
      default: 'light'
    },
    iconWidth: [String, Number]
  },
  data: function data() {
    return {
      visible: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.show = false
        this.$emit('close', event)
      }
    }
  },
  render: function render() {
    var _this4 = this

    var h = arguments[0]
    var slots = this.slots

    var _style

    var title = this.title
    var description = this.description
    var type = this.type
    var mark = this.mark
    var plain = this.plain
    var color = this.color
    var round = this.round
    var border = this.border
    var notice = this.notice
    var size = this.size
    var showIcon = this.showIcon
    var iconStyle = isDef(this.iconWidth) && {
      width: addUnit(this.iconWidth)
    }
    var key = plain ? 'color' : 'backgroundColor'
    var style = ((_style = {}), (_style[key] = color), _style)
    var typeIcon = this.icon || TYPE_ICONS_MAP[this.type]
    var themeClass = (this.effect && this.effect + '-') + type
    if (this.textColor) {
      style.color = this.textColor
    }

    var classes = {
      mark: mark,
      plain: plain,
      round: round,
      notice: notice,
      border: border
    }

    if (size) {
      classes[size] = size
    }

    function AlertTitle() {
      var slot = slots('title')
      if (slot) {
        return slot
      }
      if (title) {
        return h(
          'div',
          {
            class: bem('title')
          },
          title
        )
      }
    }

    function AlertDescription() {
      var slot = slots('desc')
      if (slot) {
        return slot
      }
      if (description) {
        var nodes = Array.isArray(description) ? description : [description]
        return h(
          'ul',
          {
            class: bem('text')
          },
          nodes.map(item => {
            return h('li', {
              domProps: {
                innerHTML: item
              }
            }, item)
          })
        )
      }
    }

    var AlertIcon =
      slots('icon') ||
      (showIcon &&
        typeIcon &&
        h(Icon, {
          attrs: {
            name: typeIcon,
            color: type
          }
        }))

    var CloseIcon =
      this.closable &&
      h(Icon, {
        attrs: {
          name: 'mee-icon-close'
        },
        class: bem('close'),
        on: {
          click: function click(event) {
            event.stopPropagation()
            _this4.visible = false
            _this4.$emit('close', event)
          }
        }
      })

    var Content = h(
      'div',
      {
        class: bem('content')
      },
      [AlertTitle(), AlertDescription(), slots('default')]
    )

    return h(
      'transition',
      {
        attrs: {
          name: this.closable ? 'mee-fade' : null
        }
      },
      [
        h(
          'div',
          {
            attrs: {
              role: 'alert'
            },
            directives: [
              {
                name: 'show',
                value: this.visible
              }
            ],
            style: style,
            class: bem([classes, themeClass])
          },
          [
            AlertIcon &&
            h(
              'div',
              {
                class: bem('icon'),
                style: iconStyle
              },
              [AlertIcon]
            ),
            Content,
            CloseIcon
          ]
        )
      ]
    )
  }
})

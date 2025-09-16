import _extends from '@babel/runtime/helpers/esm/extends'
// Utils
import { createNamespace, isObject, isDef } from '../utils'
import { route, routeProps } from '../utils/router' // Mixins

import { ChildrenMixin } from '../mixins/relation' // Components
import './style'
import Icon from '../icon'
import Info from '../info'

var _createNamespace = createNamespace('tabbar-item')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  mixins: [ChildrenMixin('meeTabbar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
    iconPrefix: String,
    iconPosition: String
  }),
  data: function data() {
    return {
      active: false
    }
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to
      var $route = this.$route

      if (to && $route) {
        var config = isObject(to)
          ? to
          : {
            path: to
          }
        var pathMatched = config.path === $route.path
        var nameMatched = isDef(config.name) && config.name === $route.name
        return pathMatched || nameMatched
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index)
      this.$emit('click', event)
      route(this.$router, this)
    },
    genIcon: function genIcon(active) {
      var h = this.$createElement
      var slot = this.slots('icon', {
        active: active
      })

      if (slot) {
        return slot
      }

      if (this.icon) {
        return h(Icon, {
          attrs: {
            name: this.icon,
            classPrefix: this.iconPrefix
          }
        })
      }
    }
  },
  render: function render() {
    var _this$badge

    var h = arguments[0]
    var _this$parent3 = this.parent
    var active = _this$parent3.route ? this.routeActive : this.active
    var color = _this$parent3[active ? 'activeColor' : 'inactiveColor']

    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] TabbarItem: "info" prop is deprecated, use "badge" prop instead.'
      )
    }

    var slotDefault = this.slots('default', {
      active: active
    })

    var textNode = null
    if (slotDefault) {
      textNode = h(
        'div',
        {
          class: bem('text')
        },
        [
          this.slots('default', {
            active: active
          })
        ]
      )
    }

    return h(
      'div',
      {
        class: bem({
          active: active
        }),
        style: {
          color: color
        },
        on: {
          click: this.onClick
        }
      },
      [
        textNode,
        h(
          'div',
          {
            class: bem('icon', this.iconPosition)
          },
          [
            this.genIcon(active),
            h(Info, {
              attrs: {
                dot: this.dot,
                info:
                  (_this$badge = this.badge) != null ? _this$badge : this.info
              }
            })
          ]
        )
      ]
    )
  }
})

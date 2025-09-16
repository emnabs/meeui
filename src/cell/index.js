import _extends from '@babel/runtime/helpers/esm/extends'
import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef } from '../utils'
import { emit, inherit } from '../utils/functional'
import { routeProps, functionalRoute } from '../utils/router'
import { cellProps } from './shared' // Components

import Icon from '../icon' // Types
// style moved to centralized theme entry

var _createNamespace = createNamespace('cell')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function Cell(h, props, slots, ctx) {
  var _props$clickable

  var icon = props.icon
  var size = props.size
  var type = props.type
  var title = props.title
  var label = props.label
  var value = props.value
  var isLink = props.isLink
  var showTitle = slots.title || isDef(title) || Label()

  function Label() {
    var showLabel = slots.label || isDef(label)

    if (showLabel) {
      return h(
        'div',
        {
          class: [bem('label'), props.labelClass]
        },
        [slots.label ? slots.label() : label]
      )
    }
  }

  function Title() {
    var nodes = [LeftIcon()]
    if (showTitle) {
      nodes.push(
        h(
          'div',
          {
            class: [
              bem('title'),
              props.titleClass,
              props.titleHorizontal && bem('title-horizontal')
            ],
            style: props.titleStyle
          },
          [slots.title ? slots.title() : h('span', [title]), Label()]
        )
      )
    }
    if (props.vertical) {
      return h(
        'div',
        {
          class: bem('head')
        },
        nodes
      )
    }
    return nodes
  }

  function Value() {
    var showValue = slots.default || isDef(value)

    if (showValue) {
      return h(
        'div',
        {
          class: [
            bem('value', {
              alone: !showTitle
            }),
            props.valueClass
          ]
        },
        [slots.default ? slots.default() : h('span', [value])]
      )
    }
  }

  function LeftIcon() {
    if (slots.icon) {
      return slots.icon()
    }

    if (icon) {
      return !props.iconBlock
        ? h(Icon, {
          class: bem('left-icon'),
          attrs: {
            name: icon,
            classPrefix: props.iconPrefix,
            color: props.iconColor
          }
        })
        : h(
          'div',
          {
            class: bem('left-icon', 'block'),
            style: {
              backgroundColor: props.iconBgColor
            }
          },
          [
            h(Icon, {
              attrs: {
                name: icon,
                classPrefix: props.iconPrefix,
                color: props.iconColor
              }
            })
          ]
        )
    }
  }

  function RightIcon() {
    var rightIconSlot = slots['right-icon']
    if (rightIconSlot) {
      return rightIconSlot()
    }

    if (isLink) {
      var arrowDirection = props.arrowDirection || 'right'
      var icon = props.rightIcon || 'arrow-' + arrowDirection
      return h(Icon, {
        class: bem('right-icon'),
        attrs: {
          name: icon
        }
      })
    }
  }

  function onClick(event) {
    emit(ctx, 'click', event)
    functionalRoute(ctx)
  }

  var clickable = (_props$clickable = props.clickable) != null ? _props$clickable : isLink
  var classes = {
    clickable: clickable,
    center: props.center,
    required: props.required,
    vertical: props.vertical,
    borderless: !props.border,
    disabled: props.disabled,
    transparent: props.transparent,
    reverse: props.reverse
  }

  if (size) {
    classes[size] = size
  }

  if (type) {
    type.split(' ').map(v => {
      if (v) {
        classes[v] = v
      }
    })
  }

  if (props.flexFill) {
    classes['flex-' + props.flexFill] = true
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem(classes),
        attrs: {
          role: clickable ? 'button' : null,
          tabindex: clickable ? 0 : null
        },
        on: {
          click: onClick
        }
      },
      inherit(ctx)
    ]),
    [Title(), Value(), RightIcon(), slots.extra == null ? void 0 : slots.extra()]
  )
}

Cell.props = _extends({}, cellProps, routeProps)
export default createComponent(Cell)

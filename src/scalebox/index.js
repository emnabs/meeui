import _extends from '@babel/runtime/helpers/esm/extends'
import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, addUnit } from '../utils'
import { emit, inherit } from '../utils/functional'
import { routeProps, functionalRoute } from '../utils/router'
import { scaleboxProps } from './shared' // Components
// style moved to centralized theme entry

var _createNamespace = createNamespace('scalebox')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function Scalebox(h, props, slots, ctx) {
  var _props$clickable

  var size = props.size
  var type = props.type
  var isLink = props.isLink

  function InnerBox() {
    return h(
      'div',
      {
        class: bem('inner')
      },
      slots.default && slots.default()
    )
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
    transparent: props.transparent
  }

  if (size) {
    classes[size] = size
  }

  if (type) {
    classes[type] = type
  }

  if (props.flexFill) {
    classes['flex-' + props.flexFill] = true
  }

  var styles = []
  if (props.ratio > 0) {
    let ratio = 100
    ratio /= props.ratio
    styles.push({
      '--scalebox-ratio': ratio + '%'
    })
  }
  if (props.width) {
    styles.push({
      '--scalebox-width': addUnit(props.width)
    })
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem(classes),
        style: styles,
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
    [InnerBox()]
  )
}

Scalebox.props = _extends({}, scaleboxProps, routeProps)
export default createComponent(Scalebox)

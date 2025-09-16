import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { THEME_COLORS } from '../utils/theme'
import { createNamespace, isDef, addUnit, getContrastYIQ } from '../utils'
import { inherit } from '../utils/functional' // Types
import './style'
var _createNamespace = createNamespace('color-block')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function ColorBlock(h, props, slots, ctx) {
  var size = props.size
  var square = props.square
  var color = props.color
  var classes = {
    square: square,
    surround: props.border
  }
  var styles = {}
  if (isDef(props.radius)) {
    styles.overflow = 'hidden'
    styles.borderRadius = addUnit(props.radius)
  }
  if (isDef(color)) {
    if (THEME_COLORS.indexOf(color) !== -1) {
      classes[color] = color
    } else {
      styles.backgroundColor = color
      styles.color = getContrastYIQ(color)
    }
  } else {
    styles.color = '#000'
  }
  if (isDef(props.width)) {
    styles.width = addUnit(props.width)
  }
  if (!square && props.height) {
    styles.height = addUnit(props.height)
  }
  if (size) {
    classes[size] = size
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: [bem(classes)],
        style: styles
      },
      inherit(ctx, true)
    ]),
    [props.showText && h('span', { class: bem('text') }, props.text || color)]
  )
}

ColorBlock.props = {
  size: String,
  square: Boolean,
  showText: Boolean,
  text: String,
  width: [Number, String],
  height: [Number, String],
  color: String,
  radius: [Number, String],
  border: {
    type: Boolean,
    default: false
  }
}
export default createComponent(ColorBlock)

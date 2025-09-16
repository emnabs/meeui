import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace } from '../utils'
import { inherit } from '../utils/functional'

// style moved to centralized theme entry

var _createNamespace = createNamespace('place-holder')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function PlaceHolder(h, props, slots, ctx) {
  var size = props.size
  var bg = props.bg

  var classes = []

  if (size) {
    classes.push(size)
  }

  if (bg) {
    classes.push(bg)
  }
  if (props.vertical) {
    classes.push('vertical')
  }
  if (props.lineThrough) {
    classes.push('line')
  }
  function Content() {
    if (slots.default) {
      return slots.default()
    }
  }

  return h(
    'div',
    _mergeJSXProps([
      {
        class: bem(classes)
      },
      inherit(ctx, true)
    ]),
    [Content()]
  )
}

PlaceHolder.props = {
  bg: String,
  size: String,
  vertical: Boolean,
  lineThrough: Boolean
}

export default createComponent(PlaceHolder)

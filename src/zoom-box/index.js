import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, isDef, addUnit } from '../utils'
import { inherit } from '../utils/functional' // Components

// style moved to centralized theme entry

var _createNamespace = createNamespace('zoom-box')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function ZoomBox(h, props, slots, ctx) {
  function Body() {
    return h(
      'div',
      {
        class: bem('inner')
      },
      [Content()]
    )
  }

  function Content() {
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

  var styles = []
  if (isDef(props.background)) {
    if (typeof props.background === 'object') {
      styles.push(props.background)
    } else {
      styles.push({
        background: props.background
      })
    }
  }
  if (isDef(props.width)) {
    styles.push({
      width: addUnit(props.width)
    })
  }
  if (isDef(props.radius)) {
    styles.push({
      overflow: 'hidden',
      borderRadius: addUnit(props.radius)
    })
  }
  if (isDef(props.ratio)) {
    const ratio = Math.abs(props.ratio)
    if (ratio !== 0 && ratio !== 1) {
      styles.push({
        '--scalebox-ratio': `${100 / ratio}%`
      })
    }
  }
  return h(
    'div',
    _mergeJSXProps([
      {
        class: [
          bem({
            round: props.round,
            center: props.center,
            border: props.border
          }),
          props.gutter && 'gutter-b'
        ],
        style: styles
      },
      inherit(ctx, true)
    ]),
    [Body()]
  )
}

ZoomBox.props = {
  background: [String, Object],
  ratio: [String, Number],
  width: [String, Number],
  bodyClass: String,
  border: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  radius: [String, Number],
  round: {
    type: Boolean,
    default: false
  },
  gutter: {
    type: Boolean,
    default: false
  }
}
export default createComponent(ZoomBox)

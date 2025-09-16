import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, addUnit } from '../utils'
import { inherit } from '../utils/functional'
import { BORDER_TOP_BOTTOM } from '../utils/constant' // Types
// style moved to centralized theme entry

var _createNamespace = createNamespace('cell-group')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

function CellGroup(h, props, slots, ctx) {
  var _ref = {}
  var _gridRootStyle = {}

  if (props.border) {
    _ref[BORDER_TOP_BOTTOM] = true
  }

  if (props.gutter) {
    _gridRootStyle['--gap'] = addUnit(props.gutter)
  }

  if (props.layout === 'grid') {
    _gridRootStyle['--grid-template-columns'] = props.gridColumn
  }

  var Group = h(
    'div',
    _mergeJSXProps([
      {
        class: [bem([props.layout, props.size, { transparent: props.transparent }]), _ref],
        style: _gridRootStyle
      },
      inherit(ctx, true)
    ]),
    [
      (props.title || slots.title) &&
      h(
        'div',
        {
          class: bem('title')
        },
        [slots.title ? slots.title() : props.title]
      ),
      slots.default == null ? void 0 : slots.default()
    ]
  )
  return Group
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: false
  },
  transparent: {
    type: Boolean,
    default: false
  },
  layout: String,
  size: String,
  gutter: {
    type: [String, Number],
    default: 0
  },
  gridColumn: {
    type: [Number, String],
    default: 4
  }
}
export default createComponent(CellGroup)

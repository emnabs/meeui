import { createNamespace, addUnit } from '../utils'
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant'
import { ParentMixin } from '../mixins/relation'
import './style'

var _createNamespace = createNamespace('grid')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  mixins: [ParentMixin('meeGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter)
        }
      }
    }
  },
  render: function render() {
    var _ref = {}

    if (this.border && !this.gutter) {
      _ref[BORDER_TOP] = true
      _ref[BORDER_LEFT] = true
    }
    var h = arguments[0]
    return h(
      'div',
      {
        style: this.style,
        class: [bem(), _ref]
      },
      [this.slots()]
    )
  }
})

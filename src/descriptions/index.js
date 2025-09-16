import { createNamespace, addUnit } from '../utils'
import { BORDER_RIGHT, BORDER_TOP_BOTTOM } from '../utils/constant'
import { ParentMixin } from '../mixins/relation'
import './style'

var _createNamespace = createNamespace('descriptions')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  mixins: [ParentMixin('meeDescriptions')],
  props: {
    gutter: [Number, String],
    size: [Number, String],
    title: String,
    extra: String,
    direction: String,
    column: {
      type: [Number, String],
      default: 4
    },
    labelClass: String,
    contentClass: String,
    labelStyle: Object,
    contentStyle: Object,
    labelPosition: String,
    labelValign: String,
    labelSuffix: String,
    labelWidth: [Number, String],
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter
      var columnNum = this.column
      var style = {}
      if (gutter) {
        style['--grid-gap'] = addUnit(gutter)
      }
      if (columnNum) {
        style['--grid-columns'] = columnNum
        var spaces = columnNum - (this.children.length % columnNum)
        if (spaces % columnNum > 0) {
          style['--grid-column-end-span'] = spaces + 1
        }
      }
      return style
    }
  },
  render: function render() {
    var _ref = {}

    var size = this.size
    if (this.border && !this.gutter) {
      _ref[BORDER_RIGHT] = true
      _ref[BORDER_TOP_BOTTOM] = true
    }
    var h = arguments[0]

    var header
    var title = this.slots('title') || this.title
    if (title) {
      header = h(
        'div',
        {
          class: bem('header')
        },
        [title]
      )
    }
    return h(
      'div',
      {
        style: this.style,
        class: [bem([size])]
      },
      [
        header,
        h(
          'div',
          {
            class: [bem('body', this.border && 'border'), _ref]
          },
          [this.slots()]
        )
      ]
    )
  }
})

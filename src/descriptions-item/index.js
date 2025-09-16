import _extends from '@babel/runtime/helpers/esm/extends'
// Utils
import { createNamespace, addUnit, isDef } from '../utils'
import { BORDER_LEFT, BORDER_BOTTOM, BORDER_RIGHT } from '../utils/constant'
import { route, routeProps } from '../utils/router' // Mixins

import { ChildrenMixin } from '../mixins/relation' // Components

import './style'

var _createNamespace = createNamespace('descriptions-item')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  mixins: [ChildrenMixin('meeDescriptions')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    label: String,
    labelClass: String,
    contentClass: String,
    labelStyle: Object,
    contentStyle: Object,
    labelPosition: String,
    labelValign: String,
    labelSuffix: String,
    labelWidth: [Number, String]
  }),
  computed: {
    labelStyles: function style() {
      var _this$parent = this.parent
      var labelStyle = this.labelStyle || _this$parent.labelStyle
      var labelWidth = this.labelWidth || _this$parent.labelWidth
      var style = { ...labelStyle }
      if (isDef(labelWidth)) {
        style['width'] = addUnit(labelWidth)
      }
      return style
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event)
      route(this.$router, this)
    },
    genLabel: function genLabel() {
      var h = this.$createElement
      var _ref
      var showLabel = this.slots('label') || isDef(this.label)
      if (showLabel) {
        var labelClass = this.labelClass || this.parent.labelClass
        var labelSuffix = this.labelSuffix || this.parent.labelSuffix
        return h(
          'dt',
          {
            class: [
              bem('label'),
              labelClass,
              ((_ref = {}), (_ref[BORDER_RIGHT] = this.parent.border), _ref)
            ],
            style: this.labelStyles
          },
          [this.slots('label') || this.label, labelSuffix]
        )
      }
    },
    genContent: function genContent() {
      var slot = this.slots()
      if (slot) {
        return slot
      }
    }
  },
  render: function render() {
    var _ref
    var h = arguments[0]

    var _this$parent3 = this.parent
    var border = _this$parent3.border
    // var gutter = _this$parent3.gutter
    var clickable = _this$parent3.clickable
    var labelPosition = this.labelPosition || _this$parent3.labelPosition
    var labelValign = this.labelValign || _this$parent3.labelValign
    var contentClass = this.contentClass || this.parent.contentClass
    return h(
      'dl',
      {
        class: [
          bem([labelPosition, labelValign]),
          ((_ref = {}), (_ref[BORDER_BOTTOM] = border), (_ref[BORDER_LEFT] = border), _ref)
        ]
      },
      [
        this.genLabel(),
        h(
          'dd',
          {
            attrs: {
              role: clickable ? 'button' : null,
              tabindex: clickable ? 0 : null
            },
            class: [
              bem('content', [
                {
                  clickable: clickable
                }
              ]),
              contentClass
            ],
            style: this.contentStyle,
            on: {
              click: this.onClick
            }
          },
          [this.genContent()]
        )
      ]
    )
  }
})

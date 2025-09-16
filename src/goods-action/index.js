import { createNamespace } from '../utils'
import { ParentMixin } from '../mixins/relation'
import './style'

var _createNamespace = createNamespace('goods-action')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  mixins: [ParentMixin('meeGoodsAction')],
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  render: function render() {
    var h = arguments[0]
    return h(
      'div',
      {
        class: bem({
          unfit: !this.safeAreaInsetBottom
        })
      },
      [this.slots()]
    )
  }
})

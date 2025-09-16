<script>
import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
import { isDef } from '../utils'
import { createBEM } from '../utils/create/bem'
import { inherit } from '../utils/functional'

var bem = createBEM('mee-info')
export default {
  name: 'EmInfo',
  functional: true,
  props: {
    dot: Boolean,
    info: {
      type: [Number, String],
      default: ''
    }
  },
  methods: {},
  render(h, context) {
    var props = context.props

    var dot = props.dot
    var info = props.info
    var showInfo = isDef(info) && info !== ''

    if (!dot && !showInfo) {
      return
    }

    return h(
      'div',
      _mergeJSXProps([
        {
          class: bem({
            dot: dot
          })
        },
        inherit(context, true)
      ]),
      [dot ? '' : props.info]
    )
  }
}
</script>
<style lang="scss" scoped>
@import 'index.scss';
</style>

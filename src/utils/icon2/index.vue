<script>
import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
import { addUnit } from '../utils'
import { createBEM } from '../utils/create/bem'
import { inherit } from '../utils/functional'
import Info from '../info' // Types

function correctName(name, classPrefix) {
  if (classPrefix) {
    name = name.replace(classPrefix, '')
  }
  return name
}

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false
}

var bem = createBEM('mee-icon')
export default {
  name: 'EmIcon',
  functional: true,
  props: {
    dot: Boolean,
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: ''
    },
    info: {
      type: [Number, String],
      default: ''
    },
    badge: {
      type: [Number, String],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'i'
    },
    classPrefix: {
      type: String,
      default: bem()
    }
  },
  methods: {},
  render(h, context) {
    var _props$badge
    var props = context.props

    var name = correctName(props.name, props.classPrefix)
    var imageIcon = isImage(name)

    var slots = context.slots()

    return h(
      props.tag,
      _mergeJSXProps([
        {
          class: [props.classPrefix, imageIcon ? '' : name],
          style: {
            color: props.color,
            fontSize: addUnit(props.size)
          }
        },
        inherit(context, true)
      ]),
      [
        slots.default && slots.default(),
        imageIcon &&
          h('el-image', {
            class: bem('image'),
            attrs: {
              src: name
            }
          }),
        h(Info, {
          attrs: {
            dot: props.dot,
            info: (_props$badge = props.badge) != null ? _props$badge : props.info
          }
        })
      ]
    )
  }
}
</script>
<style lang="scss" scoped>
@import 'index.scss';
</style>

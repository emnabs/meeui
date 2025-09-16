import { createNamespace } from '../utils'
import Icon from '../icon' // Types
// style moved to centralized theme entry
var _createNamespace = createNamespace('clipboard')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: {
    size: String,
    icon: {
      type: String,
      default: 'mee-icon-copy'
    },
    activeIcon: {
      type: String,
      default: 'mee-icon-success'
    },
    color: String,
    activeColor: {
      type: String,
      default: 'success'
    },
    visibleContent: {
      type: Boolean,
      default: true
    },
    content: [String, Array, Object],
    placeholder: {
      type: String,
      default: '-'
    },
    type: {
      type: String,
      default: 'copy'
    },
    format: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      status: false
    }
  },
  computed: {
    iconName: function iconName() {
      return this.status ? this.activeIcon : this.icon
    },
    iconColor: function iconColor() {
      return this.status ? this.activeColor : this.color
    },
    contentData: function content() {
      var content = this.content
      if (this.content) {
        return typeof content === 'string' && content.constructor === String
          ? content
          : JSON.stringify(content)
      }
      return null
    }
  },
  methods: {
    onSuccess: function onSuccess() {
      this.status = true
      this.$message({
        message: '已复制',
        type: 'success',
        duration: 1500
      })
      this.$emit('success', this.text)
    }
  },
  watch: {},
  render: function render(h) {
    var slotContent = this.slots()
    var elementOptions = {
      attrs: {
        role: 'clipboard',
        class: bem('content', [this.format])
      }
    }
    var context = h('span', elementOptions, [
      slotContent || (this.visibleContent && (this.contentData || this.placeholder))
    ])
    var copyIcon =
      this.contentData &&
      h(Icon, {
        class: bem('icon'),
        directives: [
          {
            name: 'clipboard',
            value: this.contentData,
            arg: this.type
          },
          {
            name: 'clipboard',
            value: this.onSuccess,
            arg: 'success',
            modifiers: {
              success: true
            }
          }
        ],
        attrs: {
          name: this.iconName,
          classPrefix: this.iconPrefix,
          color: this.iconColor
        }
      })
    return h(
      'span',
      {
        attrs: {
          class: bem([this.size])
        }
      },
      [context, copyIcon]
    )
  }
})

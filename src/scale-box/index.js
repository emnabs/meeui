import { createNamespace, addUnit } from '../utils'
import './style'

var _createNamespace = createNamespace('scale-box')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: {
    scale: {
      type: Number,
      default: 1
    },
    debounce: {
      type: Number,
      default: 50
    }
  },
  computed: {
    scaledWidth: function scaledWidth() {
      return this.contentWidth * this.scale
    },
    scaledHeight: function scaledHeight() {
      return this.contentHeight * this.scale
    },
    containerStyle: function containerStyle() {
      return {
        width: addUnit(this.scaledWidth),
        height: addUnit(this.scaledHeight)
      }
    },
    contentStyle: function contentStyle() {
      return {
        transform: `scale(${this.scale})`,
        transformOrigin: '0 0',
        width: addUnit(this.contentWidth),
        height: addUnit(this.contentHeight)
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.resizeObserver?.disconnect()
    window.removeEventListener('resize', this.updateSize)
    clearTimeout(this.updateTimer)
  },
  methods: {
    updateSize: function updateSize() {
      clearTimeout(this.updateTimer)
      this.updateTimer = setTimeout(() => {
        const el = this.$refs.content
        if (!el) return

        const { scrollWidth, scrollHeight } = el
        if (
          scrollWidth !== this.contentWidth ||
          scrollHeight !== this.contentHeight
        ) {
          this.contentWidth = scrollWidth
          this.contentHeight = scrollHeight
        }
      }, this.debounce)
    },
    // 强制同步更新（适用于关键操作后）
    forceUpdate: function forceUpdate() {
      clearTimeout(this.updateTimer)
      this.updateSize()
    }
  },
  data: function data() {
    return {
      contentWidth: 0,
      contentHeight: 0,
      resizeObserver: null,
      updateTimer: null
    }
  },
  mounted: function mounted() {
    // this.updateSize()
    // // 添加内容变化监听
    // this.observer = new MutationObserver(this.updateSize)
    // this.observer.observe(this.$refs.content, {
    //   childList: true,
    //   subtree: true,
    //   attributes: true
    // })
    // window.addEventListener('resize', this.updateSize)

    // 1. 使用 ResizeObserver 替代 MutationObserver
    this.resizeObserver = new ResizeObserver(this.updateSize)
    this.resizeObserver.observe(this.$refs.content)

    // 2. 初始尺寸捕获
    this.$nextTick(() => {
      this.contentWidth = this.$refs.content.scrollWidth
      this.contentHeight = this.$refs.content.scrollHeight
    })

    // 3. 监听插槽内容变化（兼容旧浏览器）
    const observer = new MutationObserver(this.updateSize)
    observer.observe(this.$refs.content, {
      childList: true,
      subtree: true,
      attributes: true
    })
    this.$once('hook:beforeDestroy', () => observer.disconnect())
  },
  render: function render() {
    var h = arguments[0]

    return h(
      'div',
      {
        class: [bem()],
        style: this.containerStyle
      },
      [
        h('div', {
          ref: 'content',
          class: bem('inner'),
          style: this.contentStyle
        }, [
          this.slots()
        ])
      ]
    )
  }
})

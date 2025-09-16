// Utils
import { createNamespace } from '../utils'
import { BORDER_BOTTOM } from '../utils/constant' // Components
// style moved to centralized theme entry
import Icon from '../icon'

var _createNamespace = createNamespace('nav-bar')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

export default createComponent({
  props: {
    title: String,
    fixed: Boolean,
    zIndex: [Number, String],
    leftIcon: String,
    rightIcon: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      height: null
    }
  },
  mounted: function mounted() {
    if (this.placeholder && this.fixed) {
      this.height = this.$refs.navBar.getBoundingClientRect().height
    }
  },
  methods: {
    genLeft: function genLeft() {
      var h = this.$createElement
      var leftSlot = this.slots('left')

      if (leftSlot) {
        return leftSlot
      }
      var leftArrow = this.leftArrow
      if (this.leftIcon) {
        leftArrow = this.leftIcon
      }

      return [
        leftArrow &&
          h(Icon, {
            class: bem('arrow'),
            attrs: {
              name: leftArrow
            }
          }),
        this.leftText &&
          h(
            'span',
            {
              class: bem('text')
            },
            [this.leftText]
          )
      ]
    },
    genRight: function genRight() {
      var h = this.$createElement
      var rightSlot = this.slots('right')

      if (rightSlot) {
        return rightSlot
      }

      return [
        this.rightIcon && h(Icon, {
          class: bem('right-icon'),
          attrs: {
            name: this.rightIcon
          }
        }),
        this.rightText && h(
          'span',
          {
            class: bem('text')
          },
          [this.rightText]
        )
      ]
    },
    genNavBar: function genNavBar() {
      var _ref

      var h = this.$createElement
      return h(
        'div',
        {
          ref: 'navBar',
          style: {
            zIndex: this.zIndex
          },
          class: [
            bem({
              fixed: this.fixed,
              'safe-area-inset-top': this.safeAreaInsetTop
            }),
            ((_ref = {}), (_ref[BORDER_BOTTOM] = this.border), _ref)
          ]
        },
        [
          h(
            'div',
            {
              class: bem('content')
            },
            [
              this.hasLeft() &&
                h(
                  'div',
                  {
                    class: bem('left'),
                    on: {
                      click: this.onClickLeft
                    }
                  },
                  [this.genLeft()]
                ),
              h(
                'div',
                {
                  class: [bem('title'), 'van-ellipsis']
                },
                [this.slots('title') || this.title]
              ),
              this.hasRight() &&
                h(
                  'div',
                  {
                    class: bem('right'),
                    on: {
                      click: this.onClickRight
                    }
                  },
                  [this.genRight()]
                )
            ]
          )
        ]
      )
    },
    hasLeft: function hasLeft() {
      return this.leftArrow || this.leftIcon || this.leftText || this.slots('left')
    },
    hasRight: function hasRight() {
      return this.rightText || this.rightIcon || this.slots('right')
    },
    onClickLeft: function onClickLeft(event) {
      this.$emit('click-left', event)
    },
    onClickRight: function onClickRight(event) {
      this.$emit('click-right', event)
    }
  },
  render: function render() {
    var h = arguments[0]

    if (this.placeholder && this.fixed) {
      return h(
        'div',
        {
          class: bem('placeholder'),
          style: {
            height: this.height + 'px'
          }
        },
        [this.genNavBar()]
      )
    }

    return this.genNavBar()
  }
})

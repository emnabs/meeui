import { createNamespace } from '../utils'

var _createNamespace = createNamespace('remote-script')
var createComponent = _createNamespace[0]

export default createComponent({
  props: {
    src: String
  },
  render: function render () {
    var h = arguments[0]
    var _this = this
    return h('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      },
      on: {
        load: function (event) {
          _this.$emit('load', event)
        },
        error: function (event) {
          _this.$emit('error', event)
        },
        readystatechange: function (event) {
          if (this.readyState === 'complete') {
            _this.$emit('load', event)
          }
        }
      }
    })
  }
})

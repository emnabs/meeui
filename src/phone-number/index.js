// Utils
import { createNamespace } from '../utils'

var _createNamespace = createNamespace('phone-number')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]
// style moved to centralized theme entry

function PhoneNumber(h, props, slots, ctx) {
  // var type = props.type
  // var color = props.color
  // var textColor = props.textColor

  function Content() {
    return validateMobile(props.value)
  }

  function validateMobile (val) {
    if (!val) {
      return ''
    }
    val = val.replace(/[^\d|+|-]/g, '')
    var str = ''
    if (val.length === 11 && /1[3456789]{1}\d{9}$/.test(val)) {
      str = val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
    } else if (/((^010|^02[^6]|^0\d{2,3})[-]?)[1-9]\d{6,7}$/.test(val)) {
      str = val.replace(/((^010|^02[^6]|^0\d{2,3})[-]?)([1-9]\d{3})(\d{0,4})$/, '($2) $3 $4')
    } else if (/^400\d{7}$/.test(val)) {
      str = val.replace(/(^400)(\d{3})(\d{4})$/, '$1-$2-$3')
    } else if (val.length <= 7) {
      str = val.replace(/(\d{5})(\d{0,4})/, '$1 $2')
    } else {
      str = val
    }
    return str.split(/[ ]+/).map(s => {
      return h('b', {
        attrs: {
          class: bem('char')
        }
      }, s)
    })
  }

  return h(
    'span',
    {
      attrs: Object.assign({
        mark: props.mark,
        plain: props.plain,
        type: 'default',
        round: props.round,
        size: props.size,
        class: bem()
      })
    },
    [Content()]
  )
}

PhoneNumber.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  value: [String, Number],
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
}
export default createComponent(PhoneNumber)

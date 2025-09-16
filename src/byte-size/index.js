// Utils
import { createNamespace, byteSize } from '../utils'

import Tag from '../tag' // Types

var _createNamespace = createNamespace('byte-size')
var createComponent = _createNamespace[0]

function ByteSize(h, props, slots, ctx) {
  var type = props.type
  var color = props.color
  var textColor = props.textColor

  function formatClass(value, index, sizes) {
    var content = value + ' ' + sizes[index]

    var _extends = {}
    if (color || textColor || type !== 'default') {
      _extends = {
        color: color,
        textColor: textColor,
        type: type
      }
    } else {
      var colors = [
        {
          type: 'primary'
        },
        {
          type: 'success'
        },
        {
          type: 'warning'
        },
        {
          type: 'danger'
        },
        {
          color: '#7232dd'
        },
        {
          color: '#ffe1e1'
        },
        {
          color: '#ad0000'
        }
      ]
      _extends = colors[index]
    }

    return h(
      Tag,
      {
        attrs: Object.assign(
          {
            mark: props.mark,
            plain: props.plain,
            type: 'default',
            round: props.round,
            size: props.size
          },
          _extends
        )
      },
      [content]
    )
  }

  function Content() {
    return byteSize(props.value, 2, 1024, formatClass)
  }

  return Content()
}

ByteSize.props = {
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
export default createComponent(ByteSize)

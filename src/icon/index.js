import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props'
// Utils
import { createNamespace, addUnit } from '../utils'
import { inherit } from '../utils/functional' // Components

import Info from '../info' // Types
import './style'
import IconShapeData from './shapes/icons.json'

var _createNamespace = createNamespace('icon')
var createComponent = _createNamespace[0]
var bem = _createNamespace[1]

const THEME_COLORS = {
  white: '#fff',
  primary: '#409eff',
  secondary: '#e4e6ef',
  success: '#65d62c',
  info: '#1bc5bd',
  warning: '#ffa800',
  danger: '#f64e60',
  light: '#f3f6f9',
  black: '#000000',
  dark: '#181c32'
}

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false
}

function correctName(name, classPrefix) {
  // console.log('correctName', name, classPrefix)
  var iconName = name || ''
  if (iconName.indexOf('mee-icon') === 0) {
    classPrefix = 'mee-icon'
  } else if (iconName.indexOf('em-icon') === 0) {
    classPrefix = 'em-icon'
  } else if (iconName.indexOf('el-icon') === 0) {
    classPrefix = 'el-icon'
  }
  if (classPrefix) {
    iconName = iconName.replace(classPrefix + '-', '')
  }

  return {
    name: iconName,
    classPrefix: classPrefix
  }
}

function Icon(h, props, slots, ctx) {
  var _props$badge

  var { name, classPrefix } = correctName(props.name, props.classPrefix)

  if (props.active && props.activeName) {
    ({ name, classPrefix } = correctName(props.activeName, props.classPrefix))
  }

  var isImageIcon = isImage(name)

  if (process.env.NODE_ENV === 'development' && props.info) {
    console.warn('[UMBE] Icon: "info" prop is deprecated, use "badge" prop instead.')
  }

  var color = THEME_COLORS[props.color] || props.color

  function Shapes() {
    if (isImageIcon || classPrefix !== 'em-icon') {
      return
    }
    var shapes = parseInt(IconShapeData[name])
    if (shapes > 0) {
      var graphs = []
      for (var i = 0; i < shapes; i++) {
        graphs.push(
          h('span', {
            class: `path${i + 1}`
          })
        )
      }
      return graphs
    }
  }
  return h(
    props.tag,
    _mergeJSXProps([
      {
        class: [classPrefix || bem(), isImageIcon ? '' : classPrefix + '-' + name],
        style: {
          color: color || false,
          fontSize: addUnit(props.size),
          cursor: props.cursor
        }
      },
      inherit(ctx, true)
    ]),
    [
      slots.default && slots.default(),
      Shapes(),
      isImageIcon &&
      h('img', {
        class: bem('image'),
        attrs: {
          src: name,
          lazyLoad: false
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

Icon.props = {
  dot: Boolean,
  active: Boolean,
  activeName: String,
  name: String,
  cursor: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  shapes: Number,
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
}
export default createComponent(Icon)

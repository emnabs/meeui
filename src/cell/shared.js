export var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  titleHorizontal: Boolean,
  iconColor: String,
  iconPrefix: String,
  iconBlock: {
    type: Boolean,
    default: false
  },
  iconBgColor: String,
  type: String,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  rightIcon: String,
  arrowDirection: String,
  flexFill: String,
  transparent: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  reverse: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: null
  }
}

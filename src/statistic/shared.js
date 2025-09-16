export var statisticProps = {
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
  //
  value: [Number, String],
  overValue: [Number, String],
  valueUnit: String,
  //
  precision: {
    type: Number,
    default: 0
  },
  thousand: {
    type: Boolean,
    default: true
  },
  deciamlStrictly: {
    type: Boolean,
    default: false
  },
  //
  label: [Number, String],
  floatValue: [Number, String],
  floatIcon: String,
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

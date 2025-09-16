// 组件导入
// import ActionSheet from './action-sheet'
// import AddressEdit from './address-edit'
// import AddressList from './address-list'
// import Area from './area'
import Alert from './alert'
import './style/index.scss'
import Avatar from './avatar'
// import Badge from './badge'
import ByteSize from './byte-size'
import Button from './button'
// import Calendar from './calendar'
import Card from './card'
// import Cascader from './cascader'
import Clipboard from './clipboard'
import Currency from './currency'
import Device from './device'
import Descriptions from './descriptions'
import DescriptionsItem from './descriptions-item'
import Cell from './cell'
import CellGroup from './cell-group'
// import Checkbox from './checkbox'
// import CheckboxGroup from './checkbox-group'
import Circle from './circle'
import Clock from './clock'
// import Col from './col'
// import Collapse from './collapse'
// import CollapseItem from './collapse-item'
import ColorBlock from './color-block'
// import ContactCard from './contact-card'
// import ContactEdit from './contact-edit'
// import ContactList from './contact-list'
import CountDown from './count-down'
import Coupon from './coupon'
// import CouponCell from './coupon-cell'
// import CouponList from './coupon-list'
// import DatetimePicker from './datetime-picker'
// import Dialog from './dialog'
// import Divider from './divider'
// import DropdownItem from './dropdown-item'
// import DropdownMenu from './dropdown-menu'
// import Empty from './empty'
import Field from './field'
// import Form from './form'
import GoodsCard from './goods-card'
import GoodsBlock from './goods-block'
import GoodsAction from './goods-action'
import GoodsActionButton from './goods-action-button'
import GoodsActionIcon from './goods-action-icon'
import Grid from './grid'
import GridItem from './grid-item'
import Icon from './icon'
import Image from './image'
// import ImagePreview from './image-preview'
// import IndexAnchor from './index-anchor'
// import IndexBar from './index-bar'
// import Info from './info'
import Lazyload from './lazyload'
// import List from './list'
// import Loading from './loading'
// import Locale from './locale'
import NavBar from './nav-bar'
import NoticeBar from './notice-bar'
// import Notify from './notify'
// import NumberKeyboard from './number-keyboard'
import Overlay from './overlay'
// import Pagination from './pagination'
// import Panel from './panel'
// import PasswordInput from './password-input'
// import Picker from './picker'
import PlaceHolder from './place-holder'
import Phone from './phone'
import PhoneNumber from './phone-number'
// import Popover from './popover'
// import Popup from './popup'
import Progress from './progress'
// import PullRefresh from './pull-refresh'
// import Radio from './radio'
// import RadioGroup from './radio-group'
// import Rate from './rate'
import RatioBox from './ratio-box'
import RemoteScript from './remote-script'
// import Row from './row'
import ScaleBox from './scale-box'
import Search from './search'
// import ShareSheet from './share-sheet'
// import Sidebar from './sidebar'
// import SidebarItem from './sidebar-item'
// import Skeleton from './skeleton'
// import Sku from './sku'
// import Slider from './slider'
import Statistic from './statistic'
// import Step from './step'
// import Stepper from './stepper'
// import Steps from './steps'
import Sticky from './sticky'
// import SubmitBar from './submit-bar'
import Swipe from './swipe'
import SwipeCell from './swipe-cell'
import SwipeItem from './swipe-item'
// import Switch from './switch'
// import SwitchCell from './switch-cell'
import Tab from './tab'
import Tabbar from './tabbar'
import TabbarItem from './tabbar-item'
import Tabs from './tabs'
import Tag from './tag'
// import Toast from './toast'
// import TreeSelect from './tree-select'
// import Uploader from './uploader'
import ZoomBox from './zoom-box'

// 版本号
var version = '1.0.0'

// 安装函数
function install(Vue) {
  var components = [
    Alert,
    Avatar,
    ByteSize,
    Button,
    Card,
    Clipboard,
    Currency,
    Device,
    Descriptions,
    DescriptionsItem,
    Cell,
    CellGroup,
    Circle,
    Clock,
    ColorBlock,
    CountDown,
    Coupon,
    Field,
    GoodsCard,
    GoodsBlock,
    GoodsAction,
    GoodsActionButton,
    GoodsActionIcon,
    Grid,
    GridItem,
    Icon,
    Image,
    Lazyload,
    NavBar,
    NoticeBar,
    Overlay,
    PlaceHolder,
    Phone,
    PhoneNumber,
    Progress,
    RatioBox,
    RemoteScript,
    ScaleBox,
    Search,
    Statistic,
    Sticky,
    Swipe,
    SwipeCell,
    SwipeItem,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    ZoomBox
  ]

  // 注册组件
  components.forEach(function (item) {
    if (item && item.install) {
      Vue.use(item)
    } else if (item && item.name) {
      Vue.component(item.name, item)
    }
  })
}

// 自动安装（浏览器环境）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出组件

export {
  install,
  version,
  Alert,
  Avatar,
  ByteSize,
  Button,
  Card,
  Clipboard,
  Currency,
  Device,
  Descriptions,
  DescriptionsItem,
  Cell,
  CellGroup,
  Circle,
  Clock,
  ColorBlock,
  CountDown,
  Coupon,
  Field,
  GoodsCard,
  GoodsBlock,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Grid,
  GridItem,
  Icon,
  Image,
  Lazyload,
  NavBar,
  NoticeBar,
  Overlay,
  PlaceHolder,
  Phone,
  PhoneNumber,
  Progress,
  RatioBox,
  RemoteScript,
  ScaleBox,
  Search,
  Statistic,
  Sticky,
  Swipe,
  SwipeCell,
  SwipeItem,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  ZoomBox
}

// 默认导出

export default {
  install: install,
  version: version
}

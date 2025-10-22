module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* unused harmony export isExternal */
/* unused harmony export isEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return byteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getContrastYIQ; });
/* unused harmony export set16ToRgb */
/* unused harmony export setRgbTo16 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertCurrency; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



var inBrowser = typeof window !== 'undefined';
var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
function noop() {}
function isDef(val) {
  return val !== undefined && val !== null;
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && typeof val === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;
    result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : '';
  });
  return result;
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
function isExternal(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @function isEmpty
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (typeof value !== 'object') {
    return true;
  }
  return Object.keys(value).length === 0;
}

/**
 * 存储单位换算
 * @param {*} bytes
 */
const byteSize = (bytes, decimals = 2, sizeFormatBase = 1024, format = (value, i, size) => {
  return value + ' ' + size[i];
}) => {
  if (bytes === 0) {
    return '0 B';
  }
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(sizeFormatBase));
  var bsize = (bytes / Math.pow(sizeFormatBase, i)).toPrecision(3);
  return format(parseFloat(bsize).toFixed(decimals), i, sizes);
  // return parseFloat(bsize).toFixed(decimals) + ' ' + sizes[i]
};
function getContrastYIQ(hexcolor) {
  if (/^(rgb|RGB)/.test(hexcolor)) {
    hexcolor = setRgbTo16(hexcolor, false);
  } else if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hexcolor)) {
    hexcolor = hexcolor.toLowerCase().replace(/\#/g, '');
    const len = hexcolor.length;
    if (len === 3) {
      let t = '';
      for (var i = 0; i < len; i++) {
        t += hexcolor.slice(i, i + 1).concat(hexcolor.slice(i, i + 1));
      }
      hexcolor = t;
    }
  }
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
}
function set16ToRgb(str, fill = true) {
  var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!reg.test(str)) {
    return;
  }
  let newStr = str.toLowerCase().replace(/\#/g, '');
  const len = newStr.length;
  if (len === 3) {
    let t = '';
    for (var i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
    }
    newStr = t;
  }
  const arr = []; // 将字符串分隔，两个两个的分隔
  for (i = 0; i < 6; i = i + 2) {
    const s = newStr.slice(i, i + 2);
    arr.push(parseInt('0x' + s));
  }
  if (fill) {
    return 'rgb(' + arr.join(',') + ')';
  }
  return arr;
}
function setRgbTo16(str, fill = true) {
  const reg = /^(rgb|RGB)/;
  if (!reg.test(str)) {
    return;
  }
  var arr = str.slice(4, str.length - 1).split(',');
  let color = fill ? '#' : '';
  for (var i = 0; i < arr.length; i++) {
    var t = Number(arr[i]).toString(16);
    if (t === '0') {
      // 如果为“0”的话，需要补0操作,否则只有5位数
      t = t + '0';
    }
    color += t;
  }
  return color;
}
function convertCurrency(money) {
  // 汉字的数字
  var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  // 基本单位
  var cnIntRadice = ['', '拾', '佰', '仟'];
  // 对应整数部分扩展单位
  var cnIntUnits = ['', '万', '亿', '兆'];
  // 对应小数部分单位
  var cnDecUnits = ['角', '分', '毫', '厘'];
  // 整数金额时后面跟的字符
  var cnInteger = '整';
  // 整型完以后的单位
  var cnIntLast = '元';
  // 最大处理的数字
  var maxNum = 999999999999999.9999;
  // 金额整数部分
  var integerNum;
  // 金额小数部分
  var decimalNum;
  // 输出的中文金额字符串
  var chineseStr = '';
  // 分离金额后用的数组，预定义
  var parts;
  if (money === '') {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    // 超出最大处理数字
    return '';
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }

  // 转换为字符串
  money = money.toString();
  if (money.indexOf('.') === -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }

  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }

  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length;
    for (i = 0; i < decLen; i++) {
      n = decimalNum.substr(i, 1);
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createNamespace; });

// CONCATENATED MODULE: ./src/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function gen(name, mods) {
  if (!mods) {
    return '';
  }
  if (typeof mods === 'string') {
    return ' ' + name + '--' + mods;
  }
  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }
  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}
function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }
    el = el ? name + '__' + el : name;
    return '' + el + gen(el, mods);
  };
}
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/format/string.js
var string = __webpack_require__(3);

// CONCATENATED MODULE: ./src/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }
      var $slots = this.$slots;
      var $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];
      if (scopedSlot) {
        return scopedSlot(props);
      }
      return $slots[name];
    }
  }
};
// CONCATENATED MODULE: ./src/utils/create/component.js
/**
 * Create a basic component with common options
 */




function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(string["a" /* camelize */])('-' + name), this);
}
// unify slots & scopedSlots

function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
}

// should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}
function createComponent(name) {
  return function (sfc) {
    if (Object(utils["g" /* isFunction */])(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }
    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }
    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./src/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;
function assignKey(to, from, key) {
  var val = from[key];
  if (!Object(utils["f" /* isDef */])(val)) {
    return;
  }
  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(utils["h" /* isObject */])(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + '\u5E74' + month + '\u6708';
    },
    rangePrompt: function rangePrompt(maxRange) {
      return '\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ' + maxRange + ' \u5929';
    }
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + '\u6298';
    },
    condition: function condition(_condition) {
      return '\u6EE1' + _condition + '\u5143\u53EF\u7528';
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + '\u5F20\u53EF\u7528';
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./src/locale/index.js



var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defineReactive = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;
    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }
    deepAssign(proto.$vantMessages, messages);
  }
});
// CONCATENATED MODULE: ./src/utils/create/i18n.js



function createI18N(name) {
  var prefix = Object(string["a" /* camelize */])(name) + '.';
  return function (path) {
    var messages = locale.messages();
    var message = Object(utils["c" /* get */])(messages, prefix + path) || Object(utils["c" /* get */])(messages, path);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return Object(utils["g" /* isFunction */])(message) ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./src/utils/create/index.js



function createNamespace(name) {
  name = 'mee-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }
  var str = num + '';
  while (str.length < targetLength) {
    str = '0' + str;
  }
  return str;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h)}else c[b][f]=a[b][f];}else if("hook"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emit; });
/* unused harmony export mount */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }
    return obj;
  }, {});
  if (inheritListeners) {
    result.on = result.on || {};
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result.on, context.data.on);
  }
  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var listeners = context.listeners[eventName];
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addUnit; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ unitToPx; });

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/validate/number.js
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
function number_isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }
  // eslint-disable-next-line no-self-compare
  return val !== val;
}
// CONCATENATED MODULE: ./src/utils/format/unit.js


function addUnit(value, unit = 'px') {
  if (!Object(utils["f" /* isDef */])(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? value + unit : value;
}
var rootFontSize;
function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }
  return rootFontSize;
}
function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}
function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}
function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}
function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }
  if (utils["e" /* inBrowser */]) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }
    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }
    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }
  return parseFloat(value);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);

// Utils

 // Types
// style moved to centralized theme entry

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('info');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
function Info(h, props, slots, ctx) {
  var dot = props.dot;
  var info = props.info;
  var showInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isDef */ "f"])(info) && info !== '';
  if (!dot && !showInfo) {
    return;
  }
  return h('div', _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    class: bem({
      dot: dot
    })
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx, true)]), [dot ? '' : props.info]);
}
Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Info));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return off; });
/* unused harmony export stopPropagation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return preventDefault; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var supportsPassive = false;
if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "j"]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}
function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }
  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "j"]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "j"]) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return functionalRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routeProps; });
/**
 * Vue Router support
 */
function isRedundantNavigation(err) {
  return err.name === 'NavigationDuplicated' ||
  // compatible with vue-router@3.3
  err.message && err.message.indexOf('redundant navigation') !== -1;
}
function route(router, config) {
  var to = config.to;
  var url = config.url;
  var replace = config.replace;
  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        if (err && !isRedundantNavigation(err)) {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ChildrenMixin; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ParentMixin; });

// CONCATENATED MODULE: ./src/utils/vnodes.js
function flattenVNodes(vnodes) {
  var result = [];
  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);
      if (vnode.componentInstance) {
        traverse(vnode.componentInstance.$children.map(function (item) {
          return item.$vnode;
        }));
      }
      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }
  traverse(vnodes);
  return result;
} // sort children instances by vnodes order

function sortChildren(children, parent) {
  var componentOptions = parent.$vnode.componentOptions;
  if (!componentOptions || !componentOptions.children) {
    return;
  }
  var vnodes = flattenVNodes(componentOptions.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}
// CONCATENATED MODULE: ./src/mixins/relation.js

function ChildrenMixin(_parent, options) {
  var _inject, _computed;
  if (options === void 0) {
    options = {};
  }
  var indexKey = options.indexKey || 'index';
  return {
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }
        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      if (this.parent) {
        return this.parent.children.indexOf(this);
      }
      return null;
    }, _computed),
    watch: {
      disableBindRelation: function disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      }
    },
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;
      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }
        var children = [].concat(this.parent.children, [this]);
        sortChildren(children, this.parent);
        this.parent.children = children;
      }
    }
  };
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref = {};
      _ref[parent] = this;
      return _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BORDER_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BORDER_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BORDER_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BORDER_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BORDER_SURROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BORDER_TOP_BOTTOM; });
/* unused harmony export BORDER_UNSET_TOP_BOTTOM */
// color
var RED = '#ee0a24'; // border

var BORDER = 'mee-hairline';
var BORDER_TOP = BORDER + '--top';
var BORDER_LEFT = BORDER + '--left';
var BORDER_RIGHT = BORDER + '--right';
var BORDER_BOTTOM = BORDER + '--bottom';
var BORDER_SURROUND = BORDER + '--surround';
var BORDER_TOP_BOTTOM = BORDER + '--top-bottom';
var BORDER_UNSET_TOP_BOTTOM = BORDER + '-unset--top-bottom';

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getElementTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getVisibleHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getVisibleTop; });
function isWindow(val) {
  return val === window;
} // get nearest scroll element
// https://github.com/vant-ui/vant/issues/3823

var overflowScrollReg = /scroll|auto|overlay/i;
function getScroller(el, root) {
  if (root === void 0) {
    root = window;
  }
  var node = el;
  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node);
    var overflowY = _window$getComputedSt.overflowY;
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}
function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top

function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }
  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}
function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }
  return el.getBoundingClientRect().height;
}
function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }
  return el.getBoundingClientRect().top;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelRaf; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */

var root = ___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "j"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindEventMixin; });
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/**
 * Bind event when mounted or activated
 */

var uid = 0;
function BindEventMixin(handler) {
  var key = 'binded_' + uid++;
  function bind() {
    if (!this[key]) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__[/* on */ "b"], true);
      this[key] = true;
    }
  }
  function unbind() {
    if (this[key]) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__[/* off */ "a"], false);
      this[key] = false;
    }
  }
  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isHidden; });
function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callInterceptor; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function callInterceptor(options) {
  var interceptor = options.interceptor;
  var args = options.args;
  var done = options.done;
  if (interceptor) {
    var returnVal = interceptor.apply(void 0, args);
    if (Object(___WEBPACK_IMPORTED_MODULE_0__[/* isPromise */ "i"])(returnVal)) {
      returnVal.then(function (value) {
        if (value) {
          done();
        }
      }).catch(___WEBPACK_IMPORTED_MODULE_0__[/* noop */ "k"]);
    } else if (returnVal) {
      done();
    }
  } else {
    done();
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TouchMixin; });

// EXTERNAL MODULE: ./src/utils/dom/event.js
var dom_event = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@vant/touch-emulator/dist/index.mjs
/* eslint-disable */
/**
 * Emulate touch event
 * Source：https://github.com/hammerjs/touchemulator
 */

(function () {
  if (typeof window === 'undefined') {
    return;
  }
  var eventTarget;
  var supportTouch = 'ontouchstart' in window;

  // polyfills
  if (!document.createTouch) {
    document.createTouch = function (
      view,
      target,
      identifier,
      pageX,
      pageY,
      screenX,
      screenY
    ) {
      // auto set
      return new Touch(
        target,
        identifier,
        {
          pageX: pageX,
          pageY: pageY,
          screenX: screenX,
          screenY: screenY,
          clientX: pageX - window.pageXOffset,
          clientY: pageY - window.pageYOffset,
        },
        0,
        0
      );
    };
  }

  if (!document.createTouchList) {
    document.createTouchList = function () {
      var touchList = TouchList();
      for (var i = 0; i < arguments.length; i++) {
        touchList[i] = arguments[i];
      }
      touchList.length = arguments.length;
      return touchList;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  /**
   * create an touch point
   * @constructor
   * @param target
   * @param identifier
   * @param pos
   * @param deltaX
   * @param deltaY
   * @returns {Object} touchPoint
   */

  var Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
    deltaX = deltaX || 0;
    deltaY = deltaY || 0;

    this.identifier = identifier;
    this.target = target;
    this.clientX = pos.clientX + deltaX;
    this.clientY = pos.clientY + deltaY;
    this.screenX = pos.screenX + deltaX;
    this.screenY = pos.screenY + deltaY;
    this.pageX = pos.pageX + deltaX;
    this.pageY = pos.pageY + deltaY;
  };

  /**
   * create empty touchlist with the methods
   * @constructor
   * @returns touchList
   */
  function TouchList() {
    var touchList = [];

    touchList['item'] = function (index) {
      return this[index] || null;
    };

    // specified by Mozilla
    touchList['identifiedTouch'] = function (id) {
      return this[id + 1] || null;
    };

    return touchList;
  }

  /**
   * only trigger touches when the left mousebutton has been pressed
   * @param touchType
   * @returns {Function}
   */

  var initiated = false;
  function onMouse(touchType) {
    return function (ev) {
      // prevent mouse events

      if (ev.type === 'mousedown') {
        initiated = true;
      }

      if (ev.type === 'mouseup') {
        initiated = false;
      }

      if (ev.type === 'mousemove' && !initiated) {
        return;
      }

      // The EventTarget on which the touch point started when it was first placed on the surface,
      // even if the touch point has since moved outside the interactive area of that element.
      // also, when the target doesnt exist anymore, we update it
      if (
        ev.type === 'mousedown' ||
        !eventTarget ||
        (eventTarget && !eventTarget.dispatchEvent)
      ) {
        eventTarget = ev.target;
      }

      if (eventTarget.closest('[data-no-touch-simulate]') == null) {
        triggerTouch(touchType, ev);
      }

      // reset
      if (ev.type === 'mouseup') {
        eventTarget = null;
      }
    };
  }

  /**
   * trigger a touch event
   * @param eventName
   * @param mouseEv
   */
  function triggerTouch(eventName, mouseEv) {
    var touchEvent = document.createEvent('Event');
    touchEvent.initEvent(eventName, true, true);

    touchEvent.altKey = mouseEv.altKey;
    touchEvent.ctrlKey = mouseEv.ctrlKey;
    touchEvent.metaKey = mouseEv.metaKey;
    touchEvent.shiftKey = mouseEv.shiftKey;

    touchEvent.touches = getActiveTouches(mouseEv);
    touchEvent.targetTouches = getActiveTouches(mouseEv);
    touchEvent.changedTouches = createTouchList(mouseEv);

    eventTarget.dispatchEvent(touchEvent);
  }

  /**
   * create a touchList based on the mouse event
   * @param mouseEv
   * @returns {TouchList}
   */
  function createTouchList(mouseEv) {
    var touchList = TouchList();
    touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
    return touchList;
  }

  /**
   * receive all active touches
   * @param mouseEv
   * @returns {TouchList}
   */
  function getActiveTouches(mouseEv) {
    // empty list
    if (mouseEv.type === 'mouseup') {
      return TouchList();
    }
    return createTouchList(mouseEv);
  }

  /**
   * TouchEmulator initializer
   */
  function TouchEmulator() {
    window.addEventListener('mousedown', onMouse('touchstart'), true);
    window.addEventListener('mousemove', onMouse('touchmove'), true);
    window.addEventListener('mouseup', onMouse('touchend'), true);
  }

  // start distance when entering the multitouch mode
  TouchEmulator['multiTouchOffset'] = 75;

  if (!supportTouch) {
    new TouchEmulator();
  }
})();

// CONCATENATED MODULE: ./src/mixins/touch.js


function getDirection(x, y) {
  if (x > y) {
    return 'horizontal';
  }
  if (y > x) {
    return 'vertical';
  }
  return '';
}
var TouchMixin = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0]; // Fix: Safari back will set clientX to negative number

      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      var LOCK_DIRECTION_DISTANCE = 10;
      if (!this.direction || this.offsetX < LOCK_DIRECTION_DISTANCE && this.offsetY < LOCK_DIRECTION_DISTANCE) {
        this.direction = getDirection(this.offsetX, this.offsetY);
      }
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/vant-ui/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var onTouchStart = this.onTouchStart;
      var onTouchMove = this.onTouchMove;
      var onTouchEnd = this.onTouchEnd;
      Object(dom_event["b" /* on */])(el, 'touchstart', onTouchStart);
      Object(dom_event["b" /* on */])(el, 'touchmove', onTouchMove);
      if (onTouchEnd) {
        Object(dom_event["b" /* on */])(el, 'touchend', onTouchEnd);
        Object(dom_event["b" /* on */])(el, 'touchcancel', onTouchEnd);
      }
    }
  }
};

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);





// style moved to centralized theme entry

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* createNamespace */ "a"])('sticky');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_5__[/* BindEventMixin */ "a"])(function (bind, isBind) {
    if (!this.scroller) {
      this.scroller = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_4__[/* getScroller */ "d"])(this.$el);
    }
    if (this.observer) {
      var method = isBind ? 'observe' : 'unobserve';
      this.observer[method](this.$el);
    }
    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    offsetTopPx: function offsetTopPx() {
      return Object(_utils_format_unit__WEBPACK_IMPORTED_MODULE_1__[/* unitToPx */ "b"])(this.offsetTop);
    },
    style: function style() {
      if (!this.fixed) {
        return;
      }
      var style = {};
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "f"])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }
      if (this.offsetTopPx && this.fixed) {
        style.top = this.offsetTopPx + 'px';
      }
      if (this.transform) {
        style.transform = 'translate3d(0, ' + this.transform + 'px, 0)';
      }
      return style;
    }
  },
  watch: {
    fixed: function fixed(isFixed) {
      this.$emit('change', isFixed);
    }
  },
  created: function created() {
    var _this = this;

    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!_utils__WEBPACK_IMPORTED_MODULE_3__[/* isServer */ "j"] && window.IntersectionObserver) {
      this.observer = new IntersectionObserver(function (entries) {
        // trigger scroll when visibility changed
        if (entries[0].intersectionRatio > 0) {
          _this.onScroll();
        }
      }, {
        root: document.body
      });
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this2 = this;
      if (Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_0__[/* isHidden */ "a"])(this.$el)) {
        return;
      }
      this.height = this.$el.offsetHeight;
      var container = this.container;
      var offsetTopPx = this.offsetTopPx;
      var scrollTop = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_4__[/* getScrollTop */ "c"])(window);
      var topToPageTop = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_4__[/* getElementTop */ "a"])(this.$el);
      var emitScrollEvent = function emitScrollEvent() {
        _this2.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this2.fixed
        });
      }; // The sticky component should be kept inside the container element

      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;
        if (scrollTop + offsetTopPx + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;
          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTopPx);
          } else {
            this.fixed = false;
          }
          emitScrollEvent();
          return;
        }
      }
      if (scrollTop + offsetTopPx > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }
      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + 'px' : null
    };
    return h('div', {
      'style': style
    }, [h('div', {
      'class': bem({
        fixed: fixed
      }),
      'style': this.style
    }, [this.slots()])]);
  }
}));

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/utils/create/index.js + 7 modules
var create = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/format/unit.js + 1 modules
var unit = __webpack_require__(6);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/dom/raf.js
var raf = __webpack_require__(16);

// EXTERNAL MODULE: ./src/utils/dom/scroll.js
var dom_scroll = __webpack_require__(15);

// CONCATENATED MODULE: ./src/tabs/utils.js


var scrollLeftRafId;
function scrollLeftTo(scroller, to, duration) {
  Object(raf["a" /* cancelRaf */])(scrollLeftRafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      scrollLeftRafId = Object(raf["c" /* raf */])(animate);
    }
  }
  animate();
}
function scrollTopTo(scroller, to, duration, callback) {
  var current = Object(dom_scroll["c" /* getScrollTop */])(scroller);
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;
  function animate() {
    current += step;
    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }
    Object(dom_scroll["h" /* setScrollTop */])(scroller, current);
    if (isDown && current < to || !isDown && current > to) {
      Object(raf["c" /* raf */])(animate);
    } else if (callback) {
      Object(raf["c" /* raf */])(callback);
    }
  }
  animate();
}
// EXTERNAL MODULE: ./src/utils/router.js
var router = __webpack_require__(11);

// EXTERNAL MODULE: ./src/utils/dom/style.js
var style = __webpack_require__(22);

// EXTERNAL MODULE: ./src/utils/dom/event.js
var dom_event = __webpack_require__(10);

// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/interceptor.js
var interceptor = __webpack_require__(27);

// EXTERNAL MODULE: ./src/mixins/relation.js + 1 modules
var relation = __webpack_require__(13);

// EXTERNAL MODULE: ./src/mixins/bind-event.js
var bind_event = __webpack_require__(20);

// EXTERNAL MODULE: ./src/info/index.js
var info = __webpack_require__(9);

// CONCATENATED MODULE: ./src/tabs/Title.js


var _createNamespace = Object(create["a" /* createNamespace */])('tab');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
/* harmony default export */ var Title = (createComponent({
  props: {
    dot: Boolean,
    type: String,
    info: [Number, String],
    color: String,
    title: String,
    isActive: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color;
      var isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;
        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }
      var titleColor = isActive ? this.activeColor : this.inactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }
      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    genText: function genText() {
      var h = this.$createElement;
      var Text = h('span', {
        'class': bem('text', {
          ellipsis: !this.scrollable
        })
      }, [this.slots() || this.title]);
      if (this.dot || Object(utils["f" /* isDef */])(this.info) && this.info !== '') {
        return h('span', {
          'class': bem('text-wrapper')
        }, [Text, h(info["default"], {
          'attrs': {
            'dot': this.dot,
            'info': this.info
          }
        })]);
      }
      return Text;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h('div', {
      'attrs': {
        'role': 'tab',
        'aria-selected': this.isActive
      },
      'class': [bem({
        active: this.isActive,
        disabled: this.disabled
      })],
      'style': this.style,
      'on': {
        'click': this.onClick
      }
    }, [this.genText()]);
  }
}));
// EXTERNAL MODULE: ./src/sticky/index.js
var sticky = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./src/mixins/touch.js + 1 modules
var touch = __webpack_require__(28);

// CONCATENATED MODULE: ./src/tabs/Content.js



var Content_createNamespace = Object(create["a" /* createNamespace */])('tabs');
var Content_createComponent = Content_createNamespace[0];
var Content_bem = Content_createNamespace[1];
var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ var Content = (Content_createComponent({
  mixins: [touch["a" /* TouchMixin */]],
  props: {
    count: Number,
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: 'translate3d(' + -1 * this.currentIndex * 100 + '%, 0, 0)',
          transitionDuration: this.duration + 's'
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction;
      var deltaX = this.deltaX;
      var currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    genChildren: function genChildren() {
      var h = this.$createElement;
      if (this.animated) {
        return h('div', {
          'class': Content_bem('track'),
          'style': this.style
        }, [this.slots()]);
      }
      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h('div', {
      'class': Content_bem('content', {
        animated: this.animated
      }),
      'on': Object(esm_extends["a" /* default */])({}, this.listeners)
    }, [this.genChildren()]);
  }
}));
// CONCATENATED MODULE: ./src/tabs/index.js
// Utils








 // Mixins


 // Components




// style moved to centralized theme entry
var tabs_createNamespace = Object(create["a" /* createNamespace */])('tabs');
var tabs_createComponent = tabs_createNamespace[0];
var tabs_bem = tabs_createNamespace[1];
/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabs_createComponent({
  mixins: [Object(relation["b" /* ParentMixin */])('vanTabs'), Object(bind_event["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(dom_scroll["d" /* getScroller */])(this.$el);
    }
    bind(window, 'resize', this.resize, true);
    if (this.scrollspy) {
      bind(this.scroller, 'scroll', this.onScroll, true);
    }
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    border: Boolean,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    beforeChange: Function,
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    offsetTop: {
      type: [Number, String],
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: [Number, String],
      default: 5
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];
      if (activeTab) {
        return activeTab.computedName;
      }
    },
    offsetTopPx: function offsetTopPx() {
      return Object(unit["b" /* unitToPx */])(this.offsetTop);
    },
    scrollOffset: function scrollOffset() {
      if (this.sticky) {
        return this.offsetTopPx + this.tabHeight;
      }
      return 0;
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;
      this.setCurrentIndexByName(this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed && !this.scrollspy) {
        Object(dom_scroll["g" /* setRootScrollTop */])(Math.ceil(Object(dom_scroll["a" /* getElementTop */])(this.$el) - this.offsetTopPx));
      }
    },
    scrollspy: function scrollspy(val) {
      if (val) {
        Object(dom_event["b" /* on */])(this.scroller, 'scroll', this.onScroll, true);
      } else {
        Object(dom_event["a" /* off */])(this.scroller, 'scroll', this.onScroll);
      }
    }
  },
  mounted: function mounted() {
    this.init();
  },
  activated: function activated() {
    this.init();
    this.setLine();
  },
  methods: {
    // @exposed-api
    resize: function resize() {
      this.setLine();
    },
    init: function init() {
      var _this2 = this;
      this.$nextTick(function () {
        _this2.inited = true;
        _this2.tabHeight = Object(dom_scroll["e" /* getVisibleHeight */])(_this2.$refs.wrap);
        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;
      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;
        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || Object(style["a" /* isHidden */])(_this3.$el)) {
          return;
        }
        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth;
        var lineHeight = _this3.lineHeight;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(unit["a" /* addUnit */])(lineWidth),
          backgroundColor: _this3.color,
          transform: 'translateX(' + left + 'px) translateX(-50%)'
        };
        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + 's';
        }
        if (Object(utils["f" /* isDef */])(lineHeight)) {
          var height = Object(unit["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }
        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      var newIndex = this.findAvailableTab(currentIndex);
      if (!Object(utils["f" /* isDef */])(newIndex)) {
        return;
      }
      var newTab = this.children[newIndex];
      var newName = newTab.computedName;
      var shouldEmitChange = this.currentIndex !== null;
      this.currentIndex = newIndex;
      if (newName !== this.active) {
        this.$emit('input', newName);
        if (shouldEmitChange) {
          this.$emit('change', newName, newTab.title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;
      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }
        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(item, index) {
      var _this4 = this;
      var _this$children$index = this.children[index];
      var title = _this$children$index.title;
      var disabled = _this$children$index.disabled;
      var computedName = _this$children$index.computedName;
      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        Object(interceptor["a" /* callInterceptor */])({
          interceptor: this.beforeChange,
          args: [computedName],
          done: function done() {
            _this4.setCurrentIndex(index);
            _this4.scrollToCurrentContent();
          }
        });
        this.$emit('click', computedName, title);
        Object(router["b" /* route */])(item.$router, item);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;
      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }
      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : +this.duration);
    },
    onSticktScroll: function onSticktScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    },
    // @exposed-api
    scrollTo: function scrollTo(name) {
      var _this5 = this;
      this.$nextTick(function () {
        _this5.setCurrentIndexByName(name);
        _this5.scrollToCurrentContent(true);
      });
    },
    scrollToCurrentContent: function scrollToCurrentContent(immediate) {
      var _this6 = this;
      if (immediate === void 0) {
        immediate = false;
      }
      if (this.scrollspy) {
        var target = this.children[this.currentIndex];
        var el = target == null ? void 0 : target.$el;
        if (el) {
          var to = Object(dom_scroll["a" /* getElementTop */])(el, this.scroller) - this.scrollOffset;
          this.lockScroll = true;
          scrollTopTo(this.scroller, to, immediate ? 0 : +this.duration, function () {
            _this6.lockScroll = false;
          });
        }
      }
    },
    onScroll: function onScroll() {
      if (this.scrollspy && !this.lockScroll) {
        var index = this.getCurrentIndexOnScroll();
        this.setCurrentIndex(index);
      }
    },
    getCurrentIndexOnScroll: function getCurrentIndexOnScroll() {
      var children = this.children;
      for (var index = 0; index < children.length; index++) {
        var top = Object(dom_scroll["f" /* getVisibleTop */])(children[index].$el);
        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1;
        }
      }
      return children.length - 1;
    }
  },
  render: function render() {
    var _this7 = this;
    var _ref;
    var h = arguments[0];
    var type = this.type;
    var animated = this.animated;
    var scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      var _item$badge;
      return h(Title, {
        'ref': 'titles',
        'refInFor': true,
        'attrs': {
          'type': type,
          'dot': item.dot,
          'info': (_item$badge = item.badge) != null ? _item$badge : item.info,
          'title': item.title,
          'color': _this7.color,
          'isActive': index === _this7.currentIndex,
          'disabled': item.disabled,
          'scrollable': scrollable,
          'activeColor': _this7.titleActiveColor,
          'inactiveColor': _this7.titleInactiveColor
        },
        'style': item.titleStyle,
        'class': item.titleClass,
        'scopedSlots': {
          default: function _default() {
            return item.slots('title');
          }
        },
        'on': {
          'click': function click() {
            _this7.onClick(item, index);
          }
        }
      });
    });
    var Wrap = h('div', {
      'ref': 'wrap',
      'class': [tabs_bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[constant["g" /* BORDER_TOP_BOTTOM */]] = type === 'line' && this.border, _ref)]
    }, [h('div', {
      'ref': 'nav',
      'attrs': {
        'role': 'tablist'
      },
      'class': tabs_bem('nav', [type, {
        complete: this.scrollable
      }]),
      'style': this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h('div', {
      'class': tabs_bem('line'),
      'style': this.lineStyle
    }), this.slots('nav-right')])]);
    return h('div', {
      'class': tabs_bem([type])
    }, [this.sticky ? h(sticky["default"], {
      'attrs': {
        'container': this.$el,
        'offsetTop': this.offsetTop
      },
      'on': {
        'scroll': this.onSticktScroll
      }
    }, [Wrap]) : Wrap, h(Content, {
      'attrs': {
        'count': this.children.length,
        'animated': animated,
        'duration': this.duration,
        'swipeable': this.swipeable,
        'currentIndex': this.currentIndex
      },
      'on': {
        'change': this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));

/***/ })
/******/ ]);
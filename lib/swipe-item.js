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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 13:
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

/***/ 2:
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

/***/ 3:
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
var string = __webpack_require__(2);

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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);




// style moved to centralized theme entry
var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('swipe-item');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__[/* ChildrenMixin */ "a"])('meeSwipe')],
  data: function data() {
    return {
      offset: 0,
      inited: false,
      mounted: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.mounted = true;
    });
  },
  computed: {
    style: function style() {
      var style = {};
      var _this$parent = this.parent;
      var size = _this$parent.size;
      var vertical = _this$parent.vertical;
      if (size) {
        style[vertical ? 'height' : 'width'] = size + 'px';
      }
      if (this.offset) {
        style.transform = 'translate' + (vertical ? 'Y' : 'X') + '(' + this.offset + 'px)';
      }
      return style;
    },
    shouldRender: function shouldRender() {
      var index = this.index;
      var inited = this.inited;
      var parent = this.parent;
      var mounted = this.mounted;
      if (!parent.lazyRender || inited) {
        return true;
      } // wait for all item to mount, so we can get the exact count

      if (!mounted) {
        return false;
      }
      var active = parent.activeIndicator;
      var maxActive = parent.count - 1;
      var prevActive = active === 0 && parent.loop ? maxActive : active - 1;
      var nextActive = active === maxActive && parent.loop ? 0 : active + 1;
      var shouldRender = index === active || index === prevActive || index === nextActive;
      if (shouldRender) {
        this.inited = true;
      }
      return shouldRender;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h('div', {
      class: bem(),
      style: this.style,
      on: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.$listeners)
    }, [this.shouldRender && h('div', {
      class: bem('inner')
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ 7:
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


/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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

/***/ 10:
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

/***/ 16:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    /************************************
        Variables
    ************************************/

    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };


    /************************************
        Constructors
    ************************************/

    // Numeral prototype object
    function Numeral(input, number) {
        this._input = input;

        this._value = number;
    }

    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;

        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;

                        break;
                    }
                }

                unformatFunction = unformatFunction || numeral._.stringToNumber;

                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }

        return new Numeral(input, value);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };

    // helper functions
    numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;

            // make sure we never format a null value
            value = value || 0;

            abs = Math.abs(value);

            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }

            // see if abbreviation is wanted
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);

                abbrForce = abbrForce ? abbrForce[1] : false;

                // check for space before abbreviation
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }

                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }

            // check for optional decimals
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }

                int = decimal.split('.')[0];

                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }

                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }

            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);

                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }


            // format number
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }

            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }

            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                int = '';
            }

            output = int + decimal + (abbr ? abbr : '');

            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }

            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;

            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;

                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }

                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }

                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

                // remove non numbers
                string = string.replace(/[^0-9\.]+/g, '');

                value *= Number(string);
            }

            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;

            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function (x) {
            var parts = x.toString().split('.');

            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);

            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;

            // Use the smallest precision value possible to avoid errors from floating point representation
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }

            power = Math.pow(10, boundedPrecision);

            // Multiply up by precision, round accurately, then divide and use native toFixed():
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }

            return output;
        }
    };

    // avaliable options
    numeral.options = options;

    // avaliable formats
    numeral.formats = formats;

    // avaliable formats
    numeral.locales = locales;

    // This function sets the current locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
    };

    // This function provides access to the loaded locale data.  If
    // no arguments are passed in, it will simply return the current
    // global locale object.
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;

        return format;
    };


    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';

            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if (!!val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.localeData
        try {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }

        //setup the delimiters and currency symbol based on culture/locale
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };


    /************************************
        Numeral Prototype
    ************************************/

    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;

            // make sure we have a roundingFunction
            roundingFunction = roundingFunction || Math.round;

            // format based on value
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;

                        break;
                    }
                }

                formatFunction = formatFunction || numeral._.numberToFormat;

                output = formatFunction(value, format, roundingFunction);
            }

            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);

            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }

            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }

            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback, 1);

            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback);

            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };

    /************************************
        Default Locale && Format
    ************************************/

    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    

(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;

                value = value * 10000;

                // check for space before BPS
                format = format.replace(/\s?BPS/, '');

                output = numeral._.numberToFormat(value, format, roundingFunction);

                if (numeral._.includes(output, ')')) {
                    output = output.split('');

                    output.splice(-1, 0, space + 'BPS');

                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }

                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();


(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };

    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;

            // check for space before
            format = format.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);

                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];

                    if (min > 0) {
                        value = value / min;
                    }

                    break;
                }
            }

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;

            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);

                        break;
                    }

                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);

                        break;
                    }
                }

                value *= (bytesMultiplier || 1);
            }

            return value;
        }
    });
})();


(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;

            // strip format of spaces and $
            format = format.replace(/\s?\$\s?/, '');

            // format the number
            output = numeral._.numberToFormat(value, format, roundingFunction);

            // update the before and after based on value
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }

            // loop through each before symbol
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];

                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }

            // loop through each after symbol
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];

                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }


            return output;
        }
    });
})();


(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');

            format = format.replace(/e[\+|\-]{1}0/, '');

            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);

            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }

            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();


(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

            // check for space before
            format = format.replace(/\s?o/, '');

            ordinal += locale.ordinal(value);

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + ordinal;
        }
    });
})();


(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;

            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }

            // check for space before %
            format = format.replace(/\s?\%/, '');

            output = numeral._.numberToFormat(value, format, roundingFunction);

            if (numeral._.includes(output, ')')) {
                output = output.split('');

                output.splice(-1, 0, space + '%');

                output = output.join('');
            } else {
                output = output + space + '%';
            }

            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();


(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;

            // turn hours and minutes into seconds and add them all up
            if (timeArray.length === 3) {
                // hours
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                // minutes
                seconds = seconds + (Number(timeArray[1]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                // minutes
                seconds = seconds + (Number(timeArray[0]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();

return numeral;
}));


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatNumber; });
/* unused harmony export parseNumberWithCommas */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  var prefix = '';
  if (index === -1) {
    return value;
  }
  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }
  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }
  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}
function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }
  if (allowMinus === void 0) {
    allowMinus = true;
  }
  if (typeof value === 'number') {
    return value;
  }
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }
  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
}

/**
 * 将字符串转换为数值（支持千分位逗号），无效值返回原值
 * @param {string|number} value - 输入值
 * @returns {number|string} - 转换后的数值或原值
 */
function parseNumberWithCommas(value) {
  if (typeof value === 'number') {
    return value; // 已经是数字，直接返回
  }
  if (typeof value !== 'string') {
    return value; // 非字符串，返回原值
  }

  // 移除所有逗号（千分位符号）并尝试解析
  const cleanedValue = value.replace(/,/g, '');

  // 使用 Numeral.js 检查是否为有效数字
  const num = numeral__WEBPACK_IMPORTED_MODULE_0___default()(cleanedValue);
  if (num.value() !== null) {
    return num.value(); // 返回解析后的数字
  }
  return value; // 无效数字，返回原字符串
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

/***/ 20:
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

/***/ 21:
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

/***/ 22:
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

/***/ 25:
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

/***/ 5:
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
// Utils




 // Mixins




// style moved to centralized theme entry
var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createNamespace */ "a"])('swipe');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_6__[/* TouchMixin */ "a"], Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_7__[/* ParentMixin */ "b"])('meeSwipe'), Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_8__[/* BindEventMixin */ "a"])(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
    bind(window, 'visibilitychange', this.onVisibilityChange);
    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    indicatorNumber: {
      type: Boolean,
      default: false
    },
    ratio: Number,
    radius: {
      type: [String, Number],
      default: 0
    },
    gutter: {
      type: [String, Number],
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      rect: null,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swiping: false,
      computedWidth: 0,
      computedHeight: 0
    };
  },
  watch: {
    children: function children() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (_autoplay > 0) {
        this.autoPlay();
      } else {
        this.clear();
      }
    }
  },
  computed: {
    count: function count() {
      return this.children.length;
    },
    maxCount: function maxCount() {
      return Math.ceil(Math.abs(this.minOffset) / this.size);
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var style = {
        transitionDuration: (this.swiping ? 0 : this.duration) + 'ms',
        transform: 'translate' + (this.vertical ? 'Y' : 'X') + '(' + this.offset + 'px)'
      };
      if (this.size) {
        var mainAxis = this.vertical ? 'height' : 'width';
        var crossAxis = this.vertical ? 'width' : 'height';
        style[mainAxis] = this.trackSize + 'px';
        style[crossAxis] = this[crossAxis] ? this[crossAxis] + 'px' : '';
      }
      return style;
    },
    indicatorStyle: function indicatorStyle() {
      var styles = [];
      if (this.indicatorColor) {
        styles.push({
          color: this.indicatorColor,
          backgroundColor: this.indicatorColor
        });
      }
      return styles;
    },
    minOffset: function minOffset() {
      return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count;
    },
    swipeStyle() {
      const styles = {};
      if (!this.vertical) {
        const ratio = Math.abs(this.ratio);
        if (ratio !== 0) {
          styles['--scalebox-ratio'] = `${100 / ratio}%`;
        }
        if (this.gutter) {
          styles['--swipe-item-gutter'] = Object(_utils_format_unit__WEBPACK_IMPORTED_MODULE_5__[/* addUnit */ "a"])(this.gutter);
        }
        if (this.radius) {
          styles['--swipe-item-radius'] = Object(_utils_format_unit__WEBPACK_IMPORTED_MODULE_5__[/* addUnit */ "a"])(this.radius);
        }
      }
      return styles;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = +this.initialSwipe;
      }
      if (!this.$el || Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_1__[/* isHidden */ "a"])(this.$el)) {
        return;
      }
      clearTimeout(this.timer);
      var rect = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };
      this.rect = rect;
      this.swiping = true;
      this.active = active;
      this.active = active;
      this.computedWidth = +this.width || rect.width;
      this.computedHeight = +this.height || rect.height;
      this.offset = this.getTargetOffset(active);
      this.children.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onVisibilityChange: function onVisibilityChange() {
      if (document.hidden) {
        this.clear();
      } else {
        this.autoPlay();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.touchStartTime = Date.now();
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);
      if (this.isCorrectDirection) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__[/* preventDefault */ "c"])(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;
      var size = this.size;
      var delta = this.delta;
      var duration = Date.now() - this.touchStartTime;
      var speed = delta / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;
      if (shouldSwipe && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        var pace = 0;
        if (this.loop) {
          pace = offset > 0 ? delta > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
        }
        this.move({
          pace: pace,
          emitChange: true
        });
      } else if (delta) {
        this.move({
          pace: 0
        });
      }
      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active;
      var count = this.count;
      var maxCount = this.maxCount;
      if (pace) {
        if (this.loop) {
          return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_4__[/* range */ "b"])(active + pace, -1, count);
        }
        return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_4__[/* range */ "b"])(active + pace, 0, maxCount);
      }
      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var currentPosition = targetActive * this.size;
      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }
      var targetOffset = offset - currentPosition;
      if (!this.loop) {
        targetOffset = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_4__[/* range */ "b"])(targetOffset, this.minOffset, 0);
      }
      return targetOffset;
    },
    move: function move(_ref) {
      var _ref$pace = _ref.pace;
      var pace = _ref$pace === void 0 ? 0 : _ref$pace;
      var _ref$offset = _ref.offset;
      var offset = _ref$offset === void 0 ? 0 : _ref$offset;
      var emitChange = _ref.emitChange;
      var loop = this.loop;
      var count = this.count;
      var active = this.active;
      var children = this.children;
      var trackSize = this.trackSize;
      var minOffset = this.minOffset;
      if (count <= 1) {
        return;
      }
      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (children[0] && targetOffset !== minOffset) {
          var outRightBound = targetOffset < minOffset;
          children[0].offset = outRightBound ? trackSize : 0;
        }
        if (children[count - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }
      this.active = targetActive;
      this.offset = targetOffset;
      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    prev: function prev() {
      var _this = this;
      this.correctPosition();
      this.resetTouchStatus();
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__[/* doubleRaf */ "b"])(function () {
        _this.swiping = false;
        _this.move({
          pace: -1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    next: function next() {
      var _this2 = this;
      this.correctPosition();
      this.resetTouchStatus();
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__[/* doubleRaf */ "b"])(function () {
        _this2.swiping = false;
        _this2.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this3 = this;
      if (options === void 0) {
        options = {};
      }
      this.correctPosition();
      this.resetTouchStatus();
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__[/* doubleRaf */ "b"])(function () {
        var targetIndex;
        if (_this3.loop && index === _this3.count) {
          targetIndex = _this3.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this3.count;
        }
        if (options.immediate) {
          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__[/* doubleRaf */ "b"])(function () {
            _this3.swiping = false;
          });
        } else {
          _this3.swiping = false;
        }
        _this3.move({
          pace: targetIndex - _this3.active,
          emitChange: true
        });
      });
    },
    correctPosition: function correctPosition() {
      this.swiping = true;
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }
      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this4 = this;
      var autoplay = this.autoplay;
      if (autoplay > 0 && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this4.next();
          _this4.autoPlay();
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this5 = this;
      var h = this.$createElement;
      var count = this.count;
      var activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');
      if (slot) {
        return slot;
      }
      if (this.showIndicators && count > 1) {
        return h('div', {
          class: bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h('i', {
            class: bem('indicator', {
              active: index === activeIndicator
            }),
            style: index === activeIndicator ? _this5.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h('div', {
      class: bem({
        scale: this.ratio,
        vertical: this.vertical
      }),
      style: this.swipeStyle
    }, [h('div', {
      ref: 'track',
      style: this.trackStyle,
      class: bem('track', {
        vertical: this.vertical
      })
    }, [this.slots()]), this.genIndicator()]);
  }
}));

/***/ })

/******/ });
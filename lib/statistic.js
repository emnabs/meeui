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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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

/***/ 11:
/***/ (function(module) {

module.exports = JSON.parse("{\"clothes-brassiere\":0,\"clothes-briefcase\":2,\"clothes-cap\":2,\"clothes-crown\":2,\"clothes-dress\":2,\"clothes-hanger\":0,\"clothes-hat\":2,\"clothes-panties\":0,\"clothes-shirt\":2,\"clothes-shoes\":2,\"clothes-shorts\":0,\"clothes-sneakers\":2,\"clothes-socks\":2,\"clothes-sun-glasses\":2,\"clothes-tie\":2,\"clothes-tshirt\":0,\"code-backspace\":2,\"code-cmd\":2,\"code-commit\":2,\"code-compiling\":2,\"code-control\":0,\"code-done\":2,\"code-error\":2,\"code-git\":6,\"code-git-branch\":4,\"code-github\":2,\"code-git-line\":3,\"code-git-merge\":4,\"code-info\":3,\"code-left\":2,\"code-loading\":0,\"code-lock\":2,\"code-lock-reset\":2,\"code-mesh\":0,\"code-minus\":2,\"code-option\":2,\"code-plus\":2,\"code-puzzle\":0,\"code-question\":2,\"code-right\":2,\"code-settings\":2,\"code-shift\":0,\"code-spy\":2,\"code-stop\":0,\"code-terminal\":2,\"code-thunder\":2,\"code-time-schedule\":2,\"code-warning\":3,\"code-warning-angle\":3,\"cooking-board\":2,\"cooking-book\":2,\"cooking-bowl\":2,\"cooking-chef\":2,\"cooking-dinner\":5,\"cooking-dish\":2,\"cooking-dishes\":2,\"cooking-fork\":2,\"cooking-fork-knife\":4,\"cooking-fork-spoon\":4,\"cooking-fork-spoon-knife\":6,\"cooking-frying-pan\":2,\"cooking-glove\":2,\"cooking-grater\":2,\"cooking-kitchen-scale\":2,\"cooking-knife\":2,\"cooking-knife-chef\":2,\"cooking-knife-fork\":4,\"cooking-ladle\":2,\"cooking-pot\":2,\"cooking-rolling-pin\":2,\"cooking-saucepan\":2,\"cooking-shovel\":2,\"cooking-sieve\":2,\"cooking-spoon\":3,\"design-adjust\":0,\"design-anchor-center\":2,\"design-anchor-center-down\":2,\"design-anchor-center-up\":2,\"design-anchor-left\":2,\"design-anchor-left-down\":2,\"design-anchor-left-up\":2,\"design-anchor-right\":2,\"design-anchor-right-down\":2,\"design-anchor-right-up\":2,\"design-arrows\":2,\"design-bezier-curve\":2,\"design-border\":0,\"design-brush\":2,\"design-bucket\":2,\"design-cap1\":2,\"design-cap2\":2,\"design-cap3\":2,\"design-circle\":0,\"design-color\":0,\"design-color-profile\":2,\"design-component\":0,\"design-crop\":2,\"design-difference\":2,\"design-edit\":2,\"design-eraser\":0,\"design-flatten\":2,\"design-flip-horizontal\":3,\"design-flip-vertical\":3,\"design-horizontal\":2,\"design-image\":0,\"design-interselect\":2,\"design-join1\":2,\"design-join2\":2,\"design-join3\":2,\"design-layers\":2,\"design-line\":3,\"design-magic\":2,\"design-mask\":2,\"design-patch\":3,\"design-pencil\":0,\"design-pen-ruller\":2,\"design-pen-tool-vector\":2,\"design-picker\":2,\"design-pixels\":6,\"design-polygon\":0,\"design-position\":0,\"design-rectangle\":0,\"design-saturation\":0,\"design-select\":2,\"design-sketch\":2,\"design-stamp\":2,\"design-substract\":2,\"design-target\":2,\"design-triangle\":0,\"design-union\":0,\"design-vertical\":2,\"design-zoom-minus\":3,\"design-zoom-plus\":3,\"devices-airpods\":4,\"devices-android\":2,\"devices-apple-watch\":2,\"devices-battery-charging\":3,\"devices-battery-empty\":2,\"devices-battery-full\":2,\"devices-battery-half\":2,\"devices-bluetooth\":2,\"devices-camera\":3,\"devices-cardboard-vr\":2,\"devices-cassete\":3,\"devices-cpu1\":8,\"devices-cpu2\":0,\"devices-diagnostics\":3,\"devices-display1\":2,\"devices-display2\":3,\"devices-display3\":3,\"devices-gameboy\":2,\"devices-gamepad1\":2,\"devices-gamepad2\":2,\"devices-generator\":4,\"devices-hard-drive\":2,\"devices-headphones\":2,\"devices-homepod\":2,\"devices-imac\":3,\"devices-iphone-back\":0,\"devices-iphone-x\":2,\"devices-iphone-x-back\":0,\"devices-keyboard\":2,\"devices-laptop\":2,\"devices-laptop-macbook\":2,\"devices-lte1\":2,\"devices-lte2\":2,\"devices-mic\":2,\"devices-midi\":7,\"devices-mouse\":3,\"devices-phone\":3,\"devices-printer\":2,\"devices-radio\":5,\"devices-router1\":2,\"devices-router2\":2,\"devices-sd-card\":0,\"devices-server\":3,\"devices-speaker\":2,\"devices-tablet\":2,\"devices-tv1\":3,\"devices-tv2\":2,\"devices-usb\":3,\"devices-usb-storage\":2,\"devices-video-camera\":2,\"devices-watch1\":4,\"devices-watch2\":4,\"devices-wifi\":2,\"electric-air-conditioning\":2,\"electric-air-dryer\":2,\"electric-blender\":2,\"electric-fan\":0,\"electric-fridge\":0,\"electric-gas-stove\":2,\"electric-highvoltage\":0,\"electric-iron\":2,\"electric-kettle\":2,\"electric-mixer\":2,\"electric-outlet\":2,\"electric-range-hood\":2,\"electric-shutdown\":2,\"electric-socket-eu\":0,\"electric-socket-us\":0,\"electric-washer\":2,\"file-cloud\":2,\"file-cloud-download\":2,\"file-cloud-upload\":2,\"file-compilation\":5,\"file-compiled\":5,\"file-deleted\":2,\"file-deleted-folder\":2,\"file-done\":2,\"file-download\":3,\"file-download-file\":2,\"file-download-folder\":2,\"file-export\":3,\"file-folder\":0,\"file-folder-check\":2,\"file-folder-cloud\":2,\"file-folder-error\":2,\"file-folder-heart\":0,\"file-folder-minus\":2,\"file-folder-plus\":2,\"file-folder-solid\":0,\"file-folder-star\":0,\"file-folder-thunder\":0,\"file-group-folders\":2,\"file-import\":3,\"file-locked\":2,\"file-media\":2,\"file-media-folder\":2,\"file-minus\":2,\"file-music\":2,\"file-picture\":4,\"file-picture-draw\":0,\"file-plus\":2,\"file-protected\":2,\"file-selected\":2,\"file-share\":4,\"file-upload\":3,\"file-uploaded\":2,\"file-upload-folder\":2,\"file-user-folder\":0,\"food-beer\":5,\"food-bottle\":2,\"food-bottles\":2,\"food-bottle-wine\":2,\"food-bread\":2,\"food-bucket\":2,\"food-burger\":3,\"food-cake\":3,\"food-carrot\":4,\"food-cheese\":2,\"food-chicken\":2,\"food-coffee\":5,\"food-cookie\":0,\"food-cup\":3,\"food-dinner\":2,\"food-fish\":2,\"food-french-bread\":0,\"food-glass-martini\":2,\"food-ice-cream\":2,\"food-miso-soup\":2,\"food-orange\":2,\"food-pizza\":0,\"food-popsicle\":2,\"food-sushi\":2,\"food-wine\":2,\"general-badge\":2,\"general-binocular\":0,\"general-bookmark\":0,\"general-clip\":0,\"general-clipboard\":4,\"general-cursor\":0,\"general-dislike\":2,\"general-duplicate\":2,\"general-edit\":0,\"general-expand-arrows\":2,\"general-file\":3,\"general-fire\":0,\"general-folder\":0,\"general-half-heart\":2,\"general-half-star\":2,\"general-heart\":0,\"general-hidden\":3,\"general-home\":0,\"general-like\":2,\"general-link\":2,\"general-lock\":0,\"general-more\":0,\"general-notification\":2,\"general-other\":0,\"general-sad\":2,\"general-save\":2,\"general-scale\":2,\"general-scissors\":2,\"general-search\":2,\"general-setting\":0,\"general-shield-check\":2,\"general-shield-disabled\":2,\"general-shield-protected\":2,\"general-size\":2,\"general-smile\":2,\"general-star\":0,\"general-switch\":2,\"general-switchs\":2,\"general-thunder\":0,\"general-thunder-move\":2,\"general-trash\":2,\"general-unlink\":4,\"general-unlock\":0,\"general-update\":0,\"general-user\":2,\"general-visible\":0,\"home-air-ballon\":2,\"home-alarm-clock\":3,\"home-armchair\":3,\"home-bag-chair\":0,\"home-bath\":3,\"home-bed\":3,\"home-book\":0,\"home-book-open\":2,\"home-box\":2,\"home-broom\":2,\"home-building\":3,\"home-bulb\":4,\"home-chair\":2,\"home-chairs\":2,\"home-clock\":2,\"home-clover\":0,\"home-commode\":2,\"home-commode-chest\":2,\"home-couch\":3,\"home-cupboard\":2,\"home-curtains\":2,\"home-deer\":2,\"home-door\":2,\"home-earth\":0,\"home-fat\":2,\"home-fireplace\":2,\"home-flashbulb\":4,\"home-flashlight\":2,\"home-flower\":0,\"home-globe\":2,\"home-heart\":0,\"home-key\":2,\"home-ladder\":2,\"home-lamp\":4,\"home-lamp-ceiling\":3,\"home-library\":2,\"home-mailbox\":2,\"home-mirror\":2,\"home-picture\":4,\"home-potting\":4,\"home-ruller\":0,\"home-stairs\":0,\"home-timer\":4,\"home-toilet\":3,\"home-towel\":0,\"home-trash\":2,\"home-tree\":2,\"home-water-mixer\":3,\"home-weight\":2,\"home-wood\":2,\"home-wood-horse\":0,\"layout-arrange\":2,\"layout-blocks\":2,\"layout-columns\":2,\"layout-grid\":2,\"layout-horizontal\":2,\"layout-left-panel-1\":2,\"layout-left-panel-2\":2,\"layout-right-panel-1\":2,\"layout-right-panel-2\":2,\"layout-top-panel-1\":2,\"layout-top-panel-2\":2,\"layout-top-panel-3\":2,\"layout-top-panel-4\":2,\"layout-top-panel-5\":2,\"layout-top-panel-6\":2,\"layout-vertical\":2,\"map-compass\":0,\"map-direction\":0,\"map-direction-go\":0,\"map-location\":0,\"map-marker\":0,\"map-marker-point\":0,\"map-position\":3,\"media-add-music\":2,\"media-airplay\":2,\"media-airplay-video\":2,\"media-back\":2,\"media-backward\":2,\"media-cd\":2,\"media-dvd\":2,\"media-eject\":2,\"media-equalizer\":4,\"media-forward\":2,\"media-library1\":4,\"media-library2\":2,\"media-library3\":2,\"media-movie-lane1\":2,\"media-movie-lane2\":2,\"media-music\":0,\"media-music-cloud\":2,\"media-music-note\":0,\"media-mute\":2,\"media-next\":2,\"media-pause\":0,\"media-play\":0,\"media-playlist1\":2,\"media-playlist2\":2,\"media-rec\":0,\"media-repeat\":2,\"media-repeat-one\":2,\"media-shuffle\":2,\"media-volume-down\":2,\"media-volume-full\":2,\"media-volume-half\":2,\"media-volume-up\":2,\"media-vynil\":2,\"media-youtube\":2,\"nav-angle-double-down\":2,\"nav-angle-double-left\":2,\"nav-angle-double-right\":2,\"nav-angle-double-up\":2,\"nav-angle-down\":0,\"nav-angle-left\":0,\"nav-angle-right\":0,\"nav-angle-up\":0,\"nav-arrow-down\":2,\"nav-arrow-from-bottom\":3,\"nav-arrow-from-left\":3,\"nav-arrow-from-right\":3,\"nav-arrow-from-top\":3,\"nav-arrow-left\":2,\"nav-arrow-right\":2,\"nav-arrows-h\":3,\"nav-arrows-v\":3,\"nav-arrow-to-bottom\":3,\"nav-arrow-to-left\":3,\"nav-arrow-to-right\":3,\"nav-arrow-to-up\":3,\"nav-arrow-up\":2,\"nav-check\":0,\"nav-close\":2,\"nav-double-check\":2,\"nav-down\":2,\"nav-down-left\":2,\"nav-down-right\":2,\"nav-exchange\":4,\"nav-left\":2,\"nav-minus\":0,\"nav-plus\":2,\"nav-right\":2,\"nav-route\":3,\"nav-sign-in\":3,\"nav-sign-out\":3,\"nav-turn-left\":2,\"nav-turn-right\":2,\"nav-up\":2,\"nav-up-down\":4,\"nav-up-left\":2,\"nav-up-right\":2,\"nav-waiting\":0,\"shop-atm\":2,\"shop-bag\":2,\"shop-barcode\":2,\"shop-barcode-read\":2,\"shop-barcode-scan\":3,\"shop-basket\":2,\"shop-basket-hang\":2,\"shop-beltbag\":2,\"shop-bitcoin\":3,\"shop-box1\":2,\"shop-box2\":2,\"shop-box3\":2,\"shop-calculator\":2,\"shop-cart\":2,\"shop-chart-bar\":4,\"shop-chart-bar-down\":4,\"shop-chart-bar-up\":4,\"shop-chart-line-down\":2,\"shop-chart-line-up\":2,\"shop-chart-pie\":2,\"shop-credit-card\":3,\"shop-diminishing\":0,\"shop-dollar\":3,\"shop-drop\":0,\"shop-euro\":2,\"shop-gift\":2,\"shop-increasing\":0,\"shop-kabaw\":3,\"shop-loader\":3,\"shop-mc\":2,\"shop-money\":2,\"shop-pound\":2,\"shop-purse\":2,\"shop-rouble\":2,\"shop-safe\":2,\"shop-sale\":2,\"shop-sales\":4,\"shop-settings\":2,\"shop-sort\":2,\"shop-tag\":0,\"shop-ticket\":0,\"shop-wallet\":3,\"sns-active-call\":2,\"sns-address-book\":2,\"sns-address-card\":0,\"sns-add-user\":2,\"sns-archive\":0,\"sns-call\":0,\"sns-call1\":0,\"sns-chat\":2,\"sns-chat1\":2,\"sns-chat2\":0,\"sns-chat3\":0,\"sns-chat4\":0,\"sns-chat-check\":2,\"sns-chat-error\":2,\"sns-chat-locked\":2,\"sns-chat-smile\":2,\"sns-clipboard-check\":3,\"sns-clipboard-list\":8,\"sns-contact\":0,\"sns-delete-user\":2,\"sns-dial-numbers\":9,\"sns-flag\":2,\"sns-forward\":0,\"sns-group\":2,\"sns-group-chat\":2,\"sns-incoming-box\":3,\"sns-incoming-call\":2,\"sns-incoming-mail\":2,\"sns-mail\":0,\"sns-mail-at\":0,\"sns-mail-attachment\":2,\"sns-mail-box\":2,\"sns-mail-error\":2,\"sns-mail-heart\":2,\"sns-mail-locked\":2,\"sns-mail-notification\":2,\"sns-mail-opened\":2,\"sns-mail-unocked\":2,\"sns-missed-call\":2,\"sns-outgoing-box\":3,\"sns-outgoing-call\":2,\"sns-outgoing-mail\":2,\"sns-readed-mail\":2,\"sns-reply\":0,\"sns-reply-all\":2,\"sns-right\":0,\"sns-rss\":3,\"sns-safe-chat\":2,\"sns-send\":0,\"sns-sending-mail\":2,\"sns-sending\":2,\"sns-share\":2,\"sns-shield-thunder\":0,\"sns-shield-user\":0,\"sns-snoozed-mail\":2,\"sns-spam\":0,\"sns-telephone-book\":2,\"sns-thumbtack\":2,\"sns-urgent-mail\":2,\"sns-write\":2,\"text-align-auto\":2,\"text-align-center\":2,\"text-align-justify\":2,\"text-align-left\":3,\"text-align-right\":2,\"text-article\":2,\"text-bold\":0,\"text-bullet-list\":2,\"text-code\":0,\"text-edit-text\":2,\"text-filter\":0,\"text-font\":2,\"text-h1\":2,\"text-h2\":2,\"text-itallic\":0,\"text-menu\":2,\"text-paragraph\":0,\"text-quote1\":2,\"text-quote2\":2,\"text-redo\":0,\"text-strikethrough\":2,\"text-text\":0,\"text-text-height\":2,\"text-text-width\":2,\"text-underline\":2,\"text-undo\":0,\"tools-axe\":2,\"tools-brush\":2,\"tools-compass\":2,\"tools-grinder\":3,\"tools-hummer\":2,\"tools-mallet\":3,\"tools-pantone\":3,\"tools-road-cone\":2,\"tools-roller\":3,\"tools-roulette\":2,\"tools-screwdriver\":2,\"tools-shovel\":2,\"tools-spatula\":2,\"tools-swiss-knife\":2,\"tools-wrench\":2,\"weather-celcium\":2,\"weather-cloud\":0,\"weather-cloud-fog\":2,\"weather-clouds\":2,\"weather-cloud-sun\":2,\"weather-cloud-wind\":3,\"weather-cloudy\":2,\"weather-cloudy-night\":2,\"weather-day-rain\":2,\"weather-fahrenheit\":2,\"weather-fog\":0,\"weather-moon\":0,\"weather-night-fog\":2,\"weather-night-rain\":2,\"weather-rain\":2,\"weather-rainbow\":2,\"weather-rain-large\":2,\"weather-rain-small\":2,\"weather-snow\":0,\"weather-snow-large\":2,\"weather-snow-small\":2,\"weather-snow-sun\":2,\"weather-storm\":2,\"weather-sun\":2,\"weather-sun-fog\":2,\"weather-sunrise\":2,\"weather-sunset\":2,\"weather-temperature\":0,\"weather-temperature-high\":0,\"weather-temperature-low\":0,\"weather-thunder\":2,\"weather-thunder-night\":2,\"weather-umbrella\":2,\"weather-wind\":2}");

/***/ }),

/***/ 12:
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h)}else c[b][f]=a[b][f];}else if("hook"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


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

/***/ 6:
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


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/numeral/numeral.js
var numeral = __webpack_require__(17);
var numeral_default = /*#__PURE__*/__webpack_require__.n(numeral);

// EXTERNAL MODULE: ./src/utils/create/index.js + 7 modules
var create = __webpack_require__(3);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/format/unit.js + 1 modules
var unit = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/router.js
var router = __webpack_require__(12);

// CONCATENATED MODULE: ./src/statistic/shared.js
var statisticProps = {
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
};
// EXTERNAL MODULE: ./src/icon/index.js
var icon = __webpack_require__(8);

// CONCATENATED MODULE: ./src/statistic/index.js



// Utils



// style moved to centralized theme entry

var _createNamespace = Object(create["a" /* createNamespace */])('statistic');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
/* harmony default export */ var statistic = __webpack_exports__["default"] = (createComponent({
  props: Object(esm_extends["a" /* default */])({}, statisticProps, router["c" /* routeProps */]),
  computed: {
    numeralFormat() {
      var format = [];
      if (this.thousand) {
        format.push('0,0');
      } else {
        format.push('0');
      }
      const arr = Array(this.precision).fill('0');
      format.push('.');
      if (arr.length) {
        format.push(arr.join(''));
      } else {
        format.push('[00]');
      }
      return format.join('');
    },
    valueText() {
      var numeralValue = numeral_default()(this.value);
      if (numeralValue.value() !== null) {
        return numeralValue.format(this.numeralFormat);
      } else {
        return this.value;
      }
    },
    overValueText() {
      if (Object(utils["f" /* isDef */])(this.overValue)) {
        var numeralValue = numeral_default()(this.overValue);
        if (numeralValue.value() !== null) {
          return numeralValue.format(this.numeralFormat);
        } else {
          return this.overValue;
        }
      }
      return '';
    },
    differenceValue() {
      if (Object(utils["f" /* isDef */])(this.overValue)) {
        var currentValue = numeral_default()(this.value).value();
        var previousValue = numeral_default()(this.overValue).value();
        if (currentValue !== null && previousValue !== null) {
          return currentValue - previousValue;
        }
      }
      return null;
    },
    offsetRate() {
      if (this.differenceValue !== null) {
        if (this.valueUnit === '%') {
          return this.differenceValue / 100;
        } else {
          var previousValue = numeral_default()(this.overValue).value();
          if (previousValue !== null && previousValue !== 0) {
            return this.differenceValue / previousValue;
          }
        }
      }
      return null;
    },
    offsetRateText() {
      return this.offsetRate !== null && numeral_default()(Math.abs(this.offsetRate)).format(this.rateNumeralFormat) || '';
    }
  },
  data() {
    return {
      rateNumeralFormat: '0.0[0]%'
    };
  },
  mounted() {},
  methods: {
    genTitleBox: function genTitleBox() {
      var h = this.$createElement;
      const {
        title
      } = this;
      var slot = this.slots('title');
      return h('div', {
        class: bem('title')
      }, [slot || title]);
    },
    genValueUnit: function genValueUnit() {
      var h = this.$createElement;
      const {
        valueUnit,
        unitClass
      } = this;
      var slot = this.slots('unit');
      const showUnit = slot || Object(utils["f" /* isDef */])(valueUnit);
      if (showUnit) {
        return h('small', {
          class: [bem('value-unit'), unitClass]
        }, [slot || valueUnit]);
      }
    },
    genContentBox: function genContentBox() {
      var h = this.$createElement;
      const {
        valueText,
        titleClass,
        titleStyle
      } = this;
      var slot = this.slots('default');
      return h('div', {
        class: [bem('content'), titleClass],
        style: titleStyle
      }, [slot || [h('span', {
        class: bem('value')
      }, valueText), this.genValueUnit()]]);
    },
    genFloatIcon: function genFloatIcon() {
      var h = this.$createElement;
      const {
        differenceValue,
        floatIcon,
        iconBlock,
        iconPrefix,
        iconColor
      } = this;
      var slot = this.slots('floatIcon');
      if (slot) {
        return slot;
      }
      if (floatIcon) {
        return !iconBlock ? h(icon["default"], {
          class: bem('float-icon'),
          attrs: {
            name: floatIcon,
            classPrefix: iconPrefix,
            color: iconColor
          }
        }) : h('div', {
          class: bem('float-icon', 'block'),
          style: {}
        }, [h(icon["default"], {
          attrs: {
            name: floatIcon,
            classPrefix: iconPrefix,
            color: iconColor
          }
        })]);
      } else if (differenceValue !== null) {
        return h('span', {
          class: [bem('arrow', differenceValue >= 0 ? 'up' : 'down')]
        });
      } else {
        return null;
      }
    },
    genFloatValueBox: function genFloatValueBox() {
      var h = this.$createElement;
      const {
        offsetRateText
      } = this;
      var floatSlot = this.slots('floatValue');
      const showFloat = floatSlot || offsetRateText;
      const floatIcon = this.genFloatIcon();
      if (showFloat) {
        const nodes = [];
        if (floatIcon) {
          nodes.push(this.genFloatIcon());
        }
        nodes.push(h('div', {
          class: bem('float-value')
        }, floatSlot || offsetRateText));
        return nodes;
      }
    },
    genLabel: function genLabel() {
      var h = this.$createElement;
      const {
        label,
        labelClass
      } = this;
      var slot = this.slots('label');
      const showLabel = slot || Object(utils["f" /* isDef */])(label);
      if (showLabel) {
        return h('div', {
          class: [bem('label'), labelClass]
        }, [slot || label]);
      }
    },
    genBottomBox: function genBottomBox() {
      var h = this.$createElement;
      const {
        label,
        offsetRateText
      } = this;
      var bottomSlot = this.slots('bottom');
      var labelSlot = this.slots('label');
      var floatValueSlot = this.slots('floatValue');
      var floatValueBox = this.genFloatValueBox();
      const showBottom = bottomSlot || labelSlot || Object(utils["f" /* isDef */])(label) || floatValueSlot || offsetRateText;
      if (showBottom) {
        return h('div', {
          class: bem('bottom')
        }, bottomSlot || [floatValueBox && this.genLabel(), floatValueBox]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var size = this.size;
    var type = this.type;
    var classes = {
      center: this.center,
      required: this.required,
      vertical: this.vertical,
      borderless: !this.border,
      reverse: this.reverse,
      transparent: this.transparent
    };
    if (size) {
      classes[size] = size;
    }
    if (type) {
      classes[type] = type;
    }
    if (this.flexFill) {
      classes['flex-' + this.flexFill] = true;
    }
    var styles = [];
    if (this.ratio > 0) {
      let ratio = 100;
      ratio /= this.ratio;
      styles.push({
        '--scalebox-ratio': ratio + '%'
      });
    }
    if (this.width) {
      styles.push({
        '--scalebox-width': Object(unit["a" /* addUnit */])(this.width)
      });
    }
    return h('div', {
      class: bem(classes),
      style: styles,
      attrs: {}
    }, [this.genTitleBox(), this.genContentBox(), this.genBottomBox()]);
  }
}));

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _shapes_icons_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
var _shapes_icons_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(11, 1);

// Utils

 // Components

 // Types
// style moved to centralized theme entry

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('icon');
var createComponent = _createNamespace[0];
var bem = _createNamespace[1];
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
};
function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}
function correctName(name, classPrefix) {
  // console.log('correctName', name, classPrefix)
  var iconName = name || '';
  if (iconName.indexOf('mee-icon') === 0) {
    classPrefix = 'mee-icon';
  } else if (iconName.indexOf('em-icon') === 0) {
    classPrefix = 'em-icon';
  } else if (iconName.indexOf('el-icon') === 0) {
    classPrefix = 'el-icon';
  }
  if (classPrefix) {
    iconName = iconName.replace(classPrefix + '-', '');
  }
  return {
    name: iconName,
    classPrefix: classPrefix
  };
}
function Icon(h, props, slots, ctx) {
  var _props$badge;
  var {
    name,
    classPrefix
  } = correctName(props.name, props.classPrefix);
  if (props.active && props.activeName) {
    ({
      name,
      classPrefix
    } = correctName(props.activeName, props.classPrefix));
  }
  var isImageIcon = isImage(name);
  if (false) {}
  var color = THEME_COLORS[props.color] || props.color;
  function Shapes() {
    if (isImageIcon || classPrefix !== 'em-icon') {
      return;
    }
    var shapes = parseInt(_shapes_icons_json__WEBPACK_IMPORTED_MODULE_5__[name]);
    if (shapes > 0) {
      var graphs = [];
      for (var i = 0; i < shapes; i++) {
        graphs.push(h('span', {
          class: `path${i + 1}`
        }));
      }
      return graphs;
    }
  }
  return h(props.tag, _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    class: [classPrefix || bem(), isImageIcon ? '' : classPrefix + '-' + name],
    style: {
      color: color || false,
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(props.size),
      cursor: props.cursor
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx, true)]), [slots.default && slots.default(), Shapes(), isImageIcon && h('img', {
    class: bem('image'),
    attrs: {
      src: name,
      lazyLoad: false
    }
  }), h(_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      dot: props.dot,
      info: (_props$badge = props.badge) != null ? _props$badge : props.info
    }
  })]);
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
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Icon));

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);

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

/***/ })

/******/ });
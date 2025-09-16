import Vue from 'vue'
export { createNamespace } from './create'
export { addUnit } from './format/unit'
export var inBrowser = typeof window !== 'undefined'
export var isServer = Vue.prototype.$isServer

export function noop() { }
export function isDef(val) {
  return val !== undefined && val !== null
}
export function isFunction(val) {
  return typeof val === 'function'
}
export function isObject(val) {
  return val !== null && typeof val === 'object'
}
export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
export function get(object, path) {
  var keys = path.split('.')
  var result = object
  keys.forEach(function (key) {
    var _result$key

    result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : ''
  })
  return result
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function isExternal(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
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

export function isEmpty(value) {
  if (value == null) {
    return true
  }

  if (typeof value !== 'object') {
    return true
  }

  return Object.keys(value).length === 0
}

/**
 * 存储单位换算
 * @param {*} bytes
 */
export const byteSize = (
  bytes,
  decimals = 2,
  sizeFormatBase = 1024,
  format = (value, i, size) => {
    return value + ' ' + size[i]
  }
) => {
  if (bytes === 0) {
    return '0 B'
  }
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(sizeFormatBase))

  var bsize = (bytes / Math.pow(sizeFormatBase, i)).toPrecision(3)

  return format(parseFloat(bsize).toFixed(decimals), i, sizes)
  // return parseFloat(bsize).toFixed(decimals) + ' ' + sizes[i]
}

export function getContrastYIQ(hexcolor) {
  if (/^(rgb|RGB)/.test(hexcolor)) {
    hexcolor = setRgbTo16(hexcolor, false)
  } else if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hexcolor)) {
    hexcolor = (hexcolor.toLowerCase()).replace(/\#/g, '')
    const len = hexcolor.length
    if (len === 3) {
      let t = ''
      for (var i = 0; i < len; i++) {
        t += hexcolor.slice(i, i + 1).concat(hexcolor.slice(i, i + 1))
      }
      hexcolor = t
    }
  }
  var r = parseInt(hexcolor.substr(0, 2), 16)
  var g = parseInt(hexcolor.substr(2, 2), 16)
  var b = parseInt(hexcolor.substr(4, 2), 16)
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return (yiq >= 128) ? '#000000' : '#ffffff'
}

export function set16ToRgb(str, fill = true) {
  var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if (!reg.test(str)) {
    return
  }
  let newStr = (str.toLowerCase()).replace(/\#/g, '')
  const len = newStr.length
  if (len === 3) {
    let t = ''
    for (var i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1))
    }
    newStr = t
  }
  const arr = [] // 将字符串分隔，两个两个的分隔
  for (i = 0; i < 6; i = i + 2) {
    const s = newStr.slice(i, i + 2)
    arr.push(parseInt('0x' + s))
  }
  if (fill) {
    return 'rgb(' + arr.join(',') + ')'
  }
  return arr
}

export function setRgbTo16(str, fill = true) {
  const reg = /^(rgb|RGB)/
  if (!reg.test(str)) { return }
  var arr = str.slice(4, str.length - 1).split(',')
  let color = fill ? '#' : ''
  for (var i = 0; i < arr.length; i++) {
    var t = Number(arr[i]).toString(16)
    if (t === '0') { // 如果为“0”的话，需要补0操作,否则只有5位数
      t = t + '0'
    }
    color += t
  }
  return color
}


export function convertCurrency(money) {
  // 汉字的数字
  var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  var cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  var cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  var cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  var cnInteger = '整'
  // 整型完以后的单位
  var cnIntLast = '元'
  // 最大处理的数字
  var maxNum = 999999999999999.9999
  // 金额整数部分
  var integerNum
  // 金额小数部分
  var decimalNum
  // 输出的中文金额字符串
  var chineseStr = ''
  // 分离金额后用的数组，预定义
  var parts

  if (money === '') {
    return ''
  }

  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }

  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }

  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0
    var IntLen = integerNum.length
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1)
      var p = IntLen - i - 1
      var q = p / 4
      var m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }

  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length
    for (i = 0; i < decLen; i++) {
      n = decimalNum.substr(i, 1)
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }

  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum === '') {
    chineseStr += cnInteger
  }

  return chineseStr
}

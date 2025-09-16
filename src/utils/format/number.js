import numeral from 'numeral'

export function range(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char)
  var prefix = ''

  if (index === -1) {
    return value
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0'
  }

  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

export function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true
  }

  if (allowMinus === void 0) {
    allowMinus = true
  }

  if (typeof value === 'number') {
    return value
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g)
  } else {
    value = value.split('.')[0]
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g)
  } else {
    value = value.replace(/-/, '')
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g
  return value.replace(regExp, '')
}

/**
 * 将字符串转换为数值（支持千分位逗号），无效值返回原值
 * @param {string|number} value - 输入值
 * @returns {number|string} - 转换后的数值或原值
 */
export function parseNumberWithCommas(value) {
  if (typeof value === 'number') {
    return value // 已经是数字，直接返回
  }

  if (typeof value !== 'string') {
    return value // 非字符串，返回原值
  }

  // 移除所有逗号（千分位符号）并尝试解析
  const cleanedValue = value.replace(/,/g, '')

  // 使用 Numeral.js 检查是否为有效数字
  const num = numeral(cleanedValue)
  if (num.value() !== null) {
    return num.value() // 返回解析后的数字
  }

  return value // 无效数字，返回原字符串
}

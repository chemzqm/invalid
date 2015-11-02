var computedStyle = require('computed-style')

/**
 * Check if element is invalid
 *
 * @param {Element} el
 * @param {Element} [topEl] optional top element to check
 * @return {Boolean}
 * @api public
 */
module.exports = function (el, topEl) {
  topEl = topEl || document.body
  if (!el.disabled && computedStyle(el, 'display') === 'none' ) {
    el = el.parentNode
    if (!el) return false
  }

  do {
    if (el.disabled) return true
    if (hidden(el)) return true
    el = el.parentNode
    // parent could be removed
    if (!el || el === topEl) break
  } while(el)
  return false
}

function hidden(el) {
  var display = computedStyle(el, 'display')
  if (display === 'none') return true
  var visibility = computedStyle(el, 'visibility')
  if (visibility === 'hidden') return true
  return false
}

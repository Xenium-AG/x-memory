export function hasTouch() {
  return (
    'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  )
}

export function randomArrayItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function shuffle(arr: any[]) {
  const newArr = [...arr]
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = newArr[i]
    newArr[i] = newArr[j]
    newArr[j] = temp
  }
  return newArr
}

export function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max)
}

export function throttle(callback, limit) {
  var waiting = false
  return function () {
    if (!waiting) {
      callback.apply(this, arguments)
      waiting = true
      setTimeout(function () {
        waiting = false
      }, limit)
    }
  }
}

export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    let context = this,
      args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export function split(str: string) {
  return str.split(',').map((s) => s.trim())
}

export function combinations(array, depth) {
  let result = []
  if (depth > array.length || depth < 1) {
    return []
  }
  if (depth === array.length) {
    return [array]
  }
  if (depth === 1) {
    return array.map((el) => [el])
  }
  for (let i = 0; i < array.length - depth + 1; i++) {
    let head = array.slice(i, i + 1)
    let tail = combinations(array.slice(i + 1), depth - 1)
    for (let j = 0; j < tail.length; j++) {
      result.push(head.concat(tail[j]))
    }
  }
  return result
}

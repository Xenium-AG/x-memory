export function hasTouch() {
  return (
    'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  )
}

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

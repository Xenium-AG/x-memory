import { cubicOut, expoInOut } from 'svelte/easing'
export function whizz(node, { from, to }, params) {
  const dx = from.left - to.left
  const dy = from.top - to.top

  const d = Math.sqrt(dx * dx + dy * dy)

  return {
    delay: 0,
    duration: Math.sqrt(d) * 50,
    easing: cubicOut,
    css: (t, u) =>
      `transform: translate(${u * dx}px, ${u * dy}px) rotate(${180}deg);`,
  }
}

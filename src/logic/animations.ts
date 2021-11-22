import { quartInOut } from 'svelte/easing'
export function shuffling(node, { delay = 0 }) {
  return {
    delay: Math.random() * 150,
    duration: 200 + Math.random() * 50,
    css: (t, u) => `
      transform:  translate(${
        -(1 - t) * (-node.parentElement.offsetWidth / 2 + node.offsetLeft + node.offsetWidth / 2)
      }px,${
      -(1 - t) *
      (node.offsetTop + 2*node.offsetHeight + node.parentElement.offsetTop)
    }px) rotateZ(${(1 - t) * 90}deg);
    `,
    easing: quartInOut,
  }
}

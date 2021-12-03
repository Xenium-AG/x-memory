<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import { tweened } from 'svelte/motion'
  import { expoInOut } from 'svelte/easing'

  let length = tweened(0, {
    duration: 1200,
    easing: expoInOut,
  })
  let flip = true
  setInterval(() => {
    if ($length <= 0) {
      $length = 100
      flip = !flip
    } else if ($length >= 100) {
      $length = 0
      flip = !flip
    }
  }, 300)

  export let open = false
</script>

{#if open}
  <div
    class="fixed z-20 inset-0 bg-light-300/15 backdrop-filter backdrop-blur-sm backdrop-grayscale"
    transition:fade={{ duration: 50 }}
  />
  <div
    class="absolute self-center top-1/2 -m-50px z-20"
    transition:scale={{ duration: 30 }}
  >
    <svg viewBox="0 0 36 36" width="100" height="100">
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#fa965a"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray={$length + ', 100'}
        transform={`scale(${flip ? -1 : 1} 1)`}
        transform-origin="center"
      />
    </svg>
  </div>
{/if}

<style>
</style>

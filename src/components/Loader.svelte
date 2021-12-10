<script lang="ts">
  import { fade, scale } from 'svelte/transition'

  export let open = false
</script>

{#if open}
  <div
    class="fixed z-20 inset-0 bg-light-300/15 backdrop-filter backdrop-blur-sm backdrop-grayscale"
    transition:fade={{ duration: 50 }}
  />
  <div
    class="absolute self-center top-1/2 -mt-50px z-20"
    transition:scale={{ duration: 30 }}
  >
    <svg viewBox="0 0 36 36" width="100" height="100" class="animate-spin">
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#fa965a"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="75, 100"
      />
    </svg>
  </div>
{/if}

<style>
</style>

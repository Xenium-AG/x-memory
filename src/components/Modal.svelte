<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let open = false
  export let title = ''

  function close() {
    dispatch('close')
  }
</script>

{#if open}
  <div
    class="fixed z-20 inset-0 bg-light-900/50 backdrop-filter backdrop-blur-sm"
    transition:fade
    on:click={close}
  />
  <div
    class="absolute self-center mt-20 w-xs bg-dark-200 z-21 rounded-xl shadow px-5 pt-3 pb-8 text-light-900"
    transition:scale
  >
    <h1 class="mt-0 mb-10 pt-1 text-center font-thin text-xl">{title}</h1>
    <slot />
  </div>
{/if}

<style>
</style>

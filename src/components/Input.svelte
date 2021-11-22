<script context="module">
  let counter = 0
</script>

<script lang="ts">
  export let label = ''
  export let value = ''
  export let textarea = false
  let eltId = 'input_' + counter++
</script>

<label for={eltId} class="relative">
  <span class="text-sm">{label}</span>
  {#if textarea}
    <textarea id={eltId} bind:value class="input" />
  {:else}
    <input type="text" id={eltId} spellcheck="false" bind:value class="input" />
  {/if}
</label>

<style>
  .input {
    @apply appearance-none rounded-md bg-light-blue-200/10 border border-solid text-light-900 text-base p-1 border-gray-400 mt-1 focus:border-orange-400 outline-none  block w-full box-border;
  }
</style>

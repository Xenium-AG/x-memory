<script context="module">
  let counter = 0
</script>

<script lang="ts">
  export let checked
  export let label

  let eltId = 'checkbox_input_' + counter++
</script>

<label
  for={eltId}
  class="inline-flex items-center space-x-4 cursor-pointer text-coolGray-100"
>
  <span class="relative">
    <input id={eltId} type="checkbox" class="hidden" bind:checked />
    <div
      class="w-10 h-6 rounded-full shadow-inner bg-red-400 transition"
      class:bg-green-500={checked}
    />
    <div
      class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow  bg-dark-200 transition"
      class:checked
    />
  </span>
  <span class="text-sm">{label}</span>
</label>

<style>
  .checked {
    @apply transform translate-x-4;
    /* transition-timing-function: cubic-bezier(0.55,-0.12, 0.53, 1.4)!important;*/
  }
  
</style>

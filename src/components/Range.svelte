<script context="module">
  let counter = 0
</script>

<script lang="ts">
  export let label = ''
  export let min = 3
  export let max = 100
  export let value = 0

  let eltId = 'range_input_' + counter++
</script>

<label for={eltId} class="relative">
  <span class="text-sm">{label}</span>
  <input id={eltId} type="range" {min} {max} bind:value class="range mt-8" />
</label>

<style>
  .range {
    -webkit-appearance: none;
    @apply bg-dark-50 rounded-full w-full !h-2;
  }

  .range::-webkit-slider-runnable-track {
    @apply rounded-full h-2 w-full;
  }
  .range::-moz-range-track {
    @apply rounded-full h-2 w-full;
  }
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply w-10 h-10 rounded-full bg-dark-200 border border-2 border-solid border-orange-400 transition-all ease-in-out;
    @apply translate-y-0;
    cursor: pointer;
  }
  .range::-moz-range-thumb {
    @apply w-10 h-10 rounded-full bg-orange-400 transition-all ease-in-out;
    @apply translate-y-0;
    cursor: pointer;
  }
</style>

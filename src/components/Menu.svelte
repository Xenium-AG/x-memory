<script lang="ts">
  import { mdiCards, mdiAccount, mdiWrench } from '@mdi/js'
  import { createEventDispatcher } from 'svelte'
  import SvgIcon from './SvgIcon.svelte'
  const dispatch = createEventDispatcher()
</script>

<div class="absolute left-0 right-0 top-0 z-10 bg-dark-200">
  <div class="max-w-xl mx-auto flex justify-between">
    <button
      on:click={() => {
        dispatch('menu-settings')
      }}
      ><span class="w-6 h-6 inline-block mr-1">
        <SvgIcon d={mdiWrench} /></span
      >Optionen</button
    >
    <button
      class="text-orange-400 h-full "
      on:click={() => {
        dispatch('shuffle')
      }}
    >
      <span class="w-6 h-6 inline-block mr-1">
        <SvgIcon d={mdiCards} fill="rgb(251, 146, 60)" /></span
      >Neu</button
    >
    <button
      on:click={() => {
        dispatch('menu-data')
      }}
      ><span class="w-6 h-6 inline-block mr-1">
        <SvgIcon d={mdiAccount} /></span
      >Daten</button
    >
  </div>
</div>

<style>
  button {
    @apply appearance-none focus:!outline-none py-3 text-sm text-cool-gray-400 active:bg-dark-400 pb-1 align-middle flex;
  }
</style>

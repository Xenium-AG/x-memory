<script lang="ts">

  import Card from './components/card.svelte'

  let data = Array.from({ length: 6 * 6 }, (_, i) => ({
    id: i,
    value: i,
    flipped: false,
    image: 'https://placekitten.com/200/200',
    type: 'image',
  }))

  function flipCard(card) {
    card.flipped = !card.flipped
    data[card.id] = card
  }
</script>

<main class="container my-2 mx-auto flex flex-col space-y-10 h-full">
  <div class="flex justify-end">
    <button
      class="font-thin text-sm bg-gray-700 text-white hover:bg-gray-600"
      >Meine Daten</button
    >
  </div>
  <div class="flex-grow flex justify-center items-center text-gray-800">
    <div class="max-w-xl h-full p-5 flex flex-wrap justify-between">
      {#each data as card, id}
        <Card {card} on:flipped={() => flipCard(card)} />
      {/each}
    </div>
  </div>
</main>

<style>
  :root {
    @apply bg-dark-50 text-light-700 select-none;
    height: 100%;
    margin: 0;
    touch-action: manipulation;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  :global(*) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(body) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    margin: 0;
  }
  :global(#app) {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
  }
  :global(button) {
    @apply appearance-none border-none cursor-pointer bg-transparent py-2 px-4 text-light-700 rounded-none;
  }
  :global(.btn) {
    @apply bg-blue-500 hover:bg-blue-700 text-white rounded-md;
  }
</style>

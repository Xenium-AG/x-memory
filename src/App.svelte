<script lang="ts">
  import Card from './components/card.svelte'
  import { createCardDeck } from './logic/cardDeck'
  import { getData } from './logic/data'
  import { quartInOut } from 'svelte/easing'
  import { throttle } from './logic/utils'

  let clicked = 0
  let pairs = []
  let cards = []
  function shuffling(node, { delay = 0 }) {
    return {
      delay: Math.random() * 150,
      duration: 200 + Math.random() * 50,
      css: (t, u) => `
        transform:  translate(${
          -(1 - t) *
          (-node.parentElement.offsetWidth / 2 + node.offsetLeft)
        }px,${-(1 - t) * (node.offsetTop + 200)}px) rotateZ(${(1 - t) * 90}deg);
      `,
      easing: quartInOut,
    }
  }

  let pairCount = 10
  let data = getData()

  let images = data.map((d) => d.profilePicture)
  let isShuffling = false

  function flipCard(card, index) {
    clicked++
    card.flipped = true
    cards[index] = card
  }
  async function closeCards() {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 500)

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.flipped = false
          cards[index] = card
        }, Math.random() * 300)
      })
    })
  }

  async function shuffle(e) {
    if (isShuffling) {
      e.preventDefault()
      return false
    }

    isShuffling = true
    await closeCards()
    cards = []
    setTimeout(() => {
      ;({ pairs, cards } = createCardDeck(data, pairCount))
      isShuffling = false
    }, 800)
  }
  const shuffleThrottled = throttle(shuffle, 800)
  shuffleThrottled()
</script>

<main class="container my-2 mx-auto flex flex-col">
  <div class="absolute left-0 right-0 top-0 bg-dark-200">
    <div
      class="max-w-xl mx-auto flex justify-between space-x-5 children:( font-thin text-sm text-cool-gray-600 hover:text-cool-gray-300)"
    >
      <button on:click={shuffleThrottled} class="py-3">Einstellungen</button>
      <button on:click={shuffleThrottled} class="py-3">Neu{clicked}</button>
      <button on:click={shuffleThrottled} class="py-3">Meine Daten</button>
    </div>
  </div>
  <div
    class="relative flex flex-grow justify-center items-center mt-25 text-gray-800"
  >
    <div class="relative max-w-xl h-full p-5 flex flex-wrap justify-between">
      {#each cards as card, i (i)}
        <span class="" transition:shuffling={{}}>
          <Card {card} on:flipped={() => flipCard(card, i)} /></span
        >
      {/each}
    </div>
  </div>
</main>
<div class="hidden">
  {#each images as src}
    <img {src} alt="" />
  {/each}
</div>

<style>
  :root {
    @apply bg-dark-50 text-light-700 select-none;
    height: 100%;
    margin: 0;
    
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);*/
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

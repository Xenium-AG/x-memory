<script lang="ts">
  import Card from './components/card.svelte'
  import { randomArrayItem, shuffle } from './logic/utils'
  import * as faker from 'faker'
  let nameProbability = 0.2
  let cardCount = 10
  let data = Array.from({ length: 6 * 6 }, (_, i) => ({
    id: i,
    value: i,
    flipped: false,
    profilePicture: faker.image.avatar(),
    name: faker.name.findName(),
    characteristics: [
      { type: 'hobby', value: 'backen' },
      { type: 'hobby', value: 'programmieren' },
      { type: 'location', value: faker.address.cityName() },
    ],
  })).map((d) => ({
    ...d,
    characteristics: [...d.characteristics, { type: 'name', value: d.name }],
  }))

  let pairs = data.map((d) => {
    const left = {
      type: 'text',
      value: null,
    }
    const right = {
      type: 'text',
      value: null,
    }

    const probablityLength = Math.max(
      1,
      Math.ceil(
        (nameProbability / (1 - nameProbability)) * d.characteristics.length,
      ),
    )
    const nameArray = Array.from({ length: probablityLength }, (_) => ({
      type: 'name',
      value: d.name,
    }))
    let characteristics = [...d.characteristics, ...nameArray]
    if (d.profilePicture?.length) {
      left.type = 'image'
      left.value = d.profilePicture
    } else {
      left.type = 'text'
      left.value = d.name
      characteristics = d.characteristics
    }

    right.value = randomArrayItem(characteristics).value

    return { left, right }
  })

  const cards = shuffle(
    pairs
      .slice(0, cardCount)
      .map(({ left, right }, i) => {
        return [left, right].map(({ type, value }) => ({
          id: i,
          type,
          value,
          flipped: false,
        }))
      })
      .flat(),
  )

  function flipCard(card, index) {
    card.flipped = !card.flipped
    cards[index] = card
  }
</script>

<main class="container my-2 mx-auto flex flex-col space-y-10 h-full">
  <div class="flex justify-end">
    <button
      class="font-thin text-sm rounded-md bg-dark-200 text-white hover:bg-dark-300"
      >Meine Daten</button
    >
  </div>
  <div class="flex-grow flex justify-center items-center text-gray-800">
    <div class="max-w-xl h-full p-5 flex flex-wrap justify-between">
      {#each cards as card, i}
        <Card {card} on:flipped={() => flipCard(card, i)} />
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

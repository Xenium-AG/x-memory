<script lang="ts">
  import Card from './components/Card.svelte'
  import Menu from './components/Menu.svelte'
  import Modal from './components/Modal.svelte'
  import { checkCards, createCardDeck } from './logic/cardDeck'
  import { getData } from './logic/data'
  import { shuffling } from './logic/animations'
  import { throttle } from './logic/utils'
  import {
    openMenu,
    numOfPairs,
    onlyNames,
    randomCardBacks,
    personOptIn,
    personPictureUrl,
    personHobbies,
  } from './stores/store'
  import CheckBox from './components/CheckBox.svelte'
  import Range from './components/Range.svelte'
  import Input from './components/Input.svelte'
  import { scale, slide } from 'svelte/transition'
  import { CARD_STATUS } from './logic/constants'
  let pairs = []
  let cards = []
  let correctCards = 0
  let pickedCards = []

  let data = getData(50)

  let images = data.map((d) => d.profilePicture)

  function flipCard(card, index) {
    const unreveal = () => {
      pickedCards.forEach((card) => {
        card.flipped = false
        card.status = CARD_STATUS.None
      })
      cards = cards
      pickedCards = []
    }
    
    if (!card.flipped) {
      if (pickedCards.length === 2) unreveal()
      card.flipped = true
      cards[index] = card
      pickedCards = [...pickedCards, card]

      if (pickedCards.length === 2) {
        const isCorrectPair = checkCards(pickedCards, pairs)
        if (isCorrectPair) {
          pickedCards.forEach((card) => {
            card.status = CARD_STATUS.Correct
          })
          cards = cards
          const pickedCopy = [...pickedCards]
          pickedCards = []
          setTimeout(() => {
            pickedCopy.forEach((card) => {
              card.status = CARD_STATUS.None
            })
            cards = cards
            correctCards += 2
          }, 500)
        } else {
          pickedCards.forEach((card) => {
            card.status = CARD_STATUS.Incorrect
          })
          cards = cards
        }
      }
    } else if (pickedCards.length === 2) {
      unreveal()
    }
  }
  async function closeCards() {
    pickedCards = []
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 300)

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.flipped = false
          cards[index] = card
        }, Math.random() * 300)
      })
    })
  }

  async function shuffle(e) {
    correctCards = 0
    await closeCards()
    cards = []
    setTimeout(() => {
      ;({ pairs, cards } = createCardDeck(data, $numOfPairs, {
        isCardBackRandom: $randomCardBacks,
        onlyNames: $onlyNames,
      }))
    }, 800)
  }
  const shuffleThrottled = throttle(shuffle, 800)
  shuffleThrottled()
</script>

<main class="container my-2 mx-auto flex flex-col">
  <Menu
    on:shuffle={shuffleThrottled}
    on:menu-settings={() => ($openMenu = 1)}
    on:menu-data={() => ($openMenu = 2)}
  />
  <div
    class="relative flex flex-grow justify-center items-center mt-25 mb-5 text-gray-800"
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
<Modal open={$openMenu == 1} on:close={() => ($openMenu = 0)} title="Optionen">
  <div class="flex flex-col space-y-8">
    <span><CheckBox bind:checked={$onlyNames} label="Nur Namen" /></span>
    <span
      ><CheckBox
        bind:checked={$randomCardBacks}
        label="Zufällige Kartenrücken"
      /></span
    >
    <span
      ><Range
        min={3}
        max={50}
        bind:value={$numOfPairs}
        label={`${$numOfPairs} Kartenpaare`}
      /></span
    >
  </div></Modal
>

<Modal
  open={$openMenu == 2}
  on:close={() => ($openMenu = 0)}
  title="Meine Daten"
>
  <div class="flex flex-col space-y-6">
    <span><CheckBox bind:checked={$personOptIn} label="Mitmachen" /></span>
    {#if $personOptIn}
      <span transition:slide class="space-y-6">
        <div class="self-center flex justify-around w-full" transition:scale>
          <Card
            card={{
              type: 'image',
              flipped: true,
              value: $personPictureUrl,
            }}
          />
          <Card
            card={{
              type: 'text',
              flipped: true,
              value: 'Hans Musterperson',
            }}
          />
        </div>
        <div>
          <Input label={'Bild URL'} bind:value={$personPictureUrl} />
        </div>
        <div>
          <Input label={'Hobbies'} textarea bind:value={$personHobbies} />
        </div>
      </span>
    {/if}
  </div></Modal
>
<Modal
  open={$openMenu == 0 && correctCards > 1 && correctCards == cards.length}
  on:close={() => {
    ;(correctCards = 0), shuffleThrottled()
  }}
  title="Glückwunsch!"
>
  <div class="text-center">Du hast alle Karten afgedeckt!</div></Modal
>

<style windi:preflights:global windi:safelist:global>
  :root {
    @apply bg-dark-50 text-light-700 select-none;
    height: 100%;
    margin: 0;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
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

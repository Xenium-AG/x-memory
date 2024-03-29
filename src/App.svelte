<script lang="ts">
  import Card from './components/Card.svelte'
  import Menu from './components/Menu.svelte'
  import Modal from './components/Modal.svelte'
  import { checkCards, createCardDeck } from './logic/cardDeck'
  import { getData, getTestData } from './logic/data'
  import { shuffling } from './logic/animations'
  import { debounce, throttle } from './logic/utils'
  import { openMenu, settings, profile } from './stores/store'
  import CheckBox from './components/CheckBox.svelte'
  import Range from './components/Range.svelte'
  import Input from './components/Input.svelte'
  import { fly, scale, slide } from 'svelte/transition'
  import { CARD_STATUS } from './logic/constants'
  import { getAccount, signOut, signIn, isSignedIn } from './auth/auth'
  import { onMount } from 'svelte'
  import { getMyRow, updateMyRow } from './logic/excel'
  import Loader from './components/Loader.svelte'

  let signedIn = false
  let initialized = false
  let legalPairs = []
  let cards = []
  let correctCards = 0
  let pickedCards = []
  let data = []
  let images = []
  let turns = 0
  let wrongPairWarning = false
  let previouslyRevealedCardIds = new Set()
  let badMemory = 0
  let incorrectPicks = 0
  let rememberingQuota = '100'

  $: rememberingQuota = (
    100 -
    (100 * badMemory) / Math.max(1, incorrectPicks)
  ).toFixed(0)
  function unreveal() {
    setPickedCardsStatus(pickedCards, CARD_STATUS.None, true)
    pickedCards = []
  }

  function flip(card, index) {
    card.flipped = true
    cards[index] = card
    pickedCards = [...pickedCards, card]
  }
  function setPickedCardsStatus(pickedCards, status, unflip = false) {
    pickedCards.forEach((card) => {
      card.status = status
      if (unflip) {
        card.flipped = false
      }
    })
    cards = cards
  }
  function markFlippedCardsAsCorrect() {
    setPickedCardsStatus(pickedCards, CARD_STATUS.Correct)
    const pickedCopy = [...pickedCards]
    pickedCards = []
    setTimeout(() => {
      setPickedCardsStatus(pickedCopy, CARD_STATUS.None)
    }, 500)
  }
  function flipCard(card, index) {
    if (pickedCards.length === 2) {
      if (!card.flipped) {
        unreveal()
      } else {
        unreveal()
        return
      }
    }

    if (!card.flipped) {
      flip(card, index)

      if (pickedCards.length === 2) {
        const { isCorrect, isSolvable } = checkCards(
          data,
          cards,
          pickedCards,
          legalPairs,
          $settings.emojiMode,
        )
        if (isCorrect && !isSolvable) {
          setTimeout(() => {
            wrongPairWarning = true
          }, 500)
          setPickedCardsStatus(pickedCards, CARD_STATUS.Correct)
        } else {
          turns++
          if (isCorrect && isSolvable) {
            markFlippedCardsAsCorrect()
            correctCards += 2
          } else {
            setPickedCardsStatus(pickedCards, CARD_STATUS.Incorrect)
            incorrectPicks += 1
            if (previouslyRevealedCardIds.has(card.id)) {
              badMemory++
            }
          }
        }
      }
    }

    previouslyRevealedCardIds.add(card.id)
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
    turns = 0
    correctCards = 0
    incorrectPicks = 0
    badMemory = 0
    previouslyRevealedCardIds = new Set()
    await closeCards()
    cards = []
    setTimeout(() => {
      ;({ legalPairs, cards } = createCardDeck(data, $settings.numOfPairs, {
        emojiMode: $settings.emojiMode,
        emojis: $settings.emojis,
        isCardBackRandom: $settings.randomCardBacks,
        onlyNames: $settings.onlyNames,
      }))
    }, 800)
  }

  async function init() {
    const accountName = await getAccount()
    const { row } = await getMyRow(accountName)
    $profile = row
    await updateData()
    shuffleThrottled()
  }
  async function updateData(override = null) {
    data = await getData(override)
    //data = await getTestData(3)
    images = data.map((d) => d.profilePicture)
  }

  onMount(async () => {
    setInterval(async () => {
      if (!signedIn) {
        //alert('Please sign in to continue')
        if (await getAccount()) {
          signedIn = true
          await init()
          initialized = true
          if (!$profile.optIn) {
            $openMenu = 2
          }
        }
      }
    }, 1000)
  })

  async function saveProfile() {
    if (isSignedIn()) {
      await updateMyRow($profile.accountName, $profile)
      await updateData($profile)
      await init()
    }
  }
  const shuffleThrottled = throttle(shuffle, 500)
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
    <!--button class="btn" on:click={init}>Start</button-->
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
    <span
      ><CheckBox bind:checked={$settings.onlyNames} label="Nur Namen" /></span
    >
    <span
      ><CheckBox
        bind:checked={$settings.randomCardBacks}
        label="Zufällige Kartenrücken"
      /></span
    >
    <span
      ><CheckBox
        bind:checked={$settings.emojiMode}
        label="Emoji Modus🍀"
      /></span
    >
    {#if $settings.emojiMode}
      <span class="flex flex-col children:w-full"
        ><Input label={'Emojis'} textarea bind:value={$settings.emojis} />
        <button class="btn bg-light-50 mt-5 h-8 py-0"
          on:click={() =>
            ($settings.emojis =
              '🐵🐶🐺🐱🦁🐯🦒🦊🦝🐮🐷🐗🐭🐹🐰🐻🐨🐼🐸🦓🐴🦄🐔🐲🐒🦍🦧🐅🐆🐎🦌🦏🦛🐂🐃🐄🐖🐏🐑🐐🐪🐫🦙🦘🦥🦨🦡🐘🐁🐀🦔🐇🐿🦎🐊🐢🐍🐉🦕🦖🦦🦈🐬🐳🐋🐟🐠🐡🦐🦑🐙🦞🦀🐚🦆🐓🦃🦅🕊🦢🦜🦩🦚🦉🐦🐧🐥🐣🦇🦋🐌🐛🦟🦗🐜🐝🐞🦂')}
        >
          <span class="text-red-500">Reset</span>
        </button>
      </span>
      
    {/if}

    <span
      ><Range
        min={3}
        max={50}
        bind:value={$settings.numOfPairs}
        label={`${$settings.numOfPairs} Kartenpaare`}
      /></span
    >
  </div></Modal
>
<Modal
  open={$openMenu == 2}
  on:close={() => (($openMenu = 0), saveProfile())}
  title="Meine Daten"
>
  <div class="flex flex-col space-y-6">
    {#if $profile.accountName.includes('@')}
      <span
        ><CheckBox bind:checked={$profile.optIn} label="Mitmachen" />
        <div class="mt-1 text-xs">
          Ohne deinen Opt-in tauchst du im Spiel nicht auf.
        </div></span
      >
    {/if}

    {#if $profile.optIn}
      <span transition:slide class="space-y-6">
        <div class="self-center flex justify-around w-full" transition:scale>
          <Card
            card={{
              type: 'image',
              flipped: true,
              value: $profile.profilePicture,
            }}
          />
          <Card
            card={{
              type: 'text',
              flipped: true,
              value: $profile.name,
            }}
          />
        </div>
        <div>
          <Input
            label={'Bild URL (default: Website)'}
            bind:value={$profile.profilePicture}
          />
        </div>
        <div>
          <Input label={'Name'} bind:value={$profile.name} />
        </div>
        <div>
          <Input
            label={'Hobbies, Regien, Lieblingsessen, etc.'}
            textarea
            bind:value={$profile.hobbies}
          />
        </div>
      </span>
    {/if}
    <button
      class="btn bg-cool-gray-700 hover:bg-cool-gray-500"
      on:click={() => {
        if (confirm('Möchtest du dich wirklich ausloggen?')) {
          signOut()
        }
      }}>Abmelden</button
    >
  </div></Modal
>
<Modal
  open={$openMenu == 0 && correctCards > 1 && correctCards == cards.length}
  on:close={() => {
    ;(correctCards = 0), shuffleThrottled()
  }}
  title="🌈 Glückwunsch! 🌈"
>
  <div class="text-center">
    Du hast alle Karten in {turns} Zügen aufgedeckt!
    <div class="my-8">
      Erinnerungsquote: <div
        class="text-5xl mt-2 align-top justify-center flex"
      >
        {#each String(rememberingQuota).split('') as num, i}
          <span
            class="inline-block"
            in:fly={{ y: -10, duration: 500, delay: 200 + i * 100 }}
          >
            {num}
          </span>
        {/each}

        <span class="text-xl pt-0.2 pl-0.3">%</span>
      </div>
    </div>
  </div></Modal
>

<Modal
  open={$openMenu == 0 && wrongPairWarning}
  on:close={() => {
    wrongPairWarning = false
  }}
  title="Richtig, aber..."
>
  <div class="text-center">
    Die Karten passen, aber ein anderes Pärchen ist gemeint, sonst ist die Runde
    nicht mehr lösbar.
    <br /> <br />
    Der Zug wurde nicht gezählt 🙈
  </div></Modal
>
<Loader open={!initialized} />

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

<script lang="ts">
  import { CARD_STATUS, COLORS } from '../logic/constants'
  import { createEventDispatcher } from 'svelte'
  import { hasTouch } from '../logic/utils'

  const dispatch = createEventDispatcher()

  const cardBacks = Object.fromEntries(
    COLORS.map(({ name, color }) => [
      name,
      `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" stroke="%23${color.replace(
        '#',
        '',
      )}" stroke-width="22" viewBox="0 0 100 100"%3E%3Cg transform="rotate(45)"%3E%3Cpath d="M0 0h150M0 30h150M0 60h150M0 -30h150M0 -60h150"/%3E%3C/g%3E%3C/svg%3E`,
    ]),
  )

  function flip(node, { delay = 0, duration = 250 }) {
    return {
      delay,
      duration,
      css: (t, u) => `
        transform: rotateX(${1 - u * 180}deg) rotateZ(${1 - u * 5}deg) scale(${
        1 + u * 0.6
      });
        opacity: ${u < 0.5 ? 1 : 0};
      `,
    }
  }

  export let card
</script>

<div
  class="relative w-27 h-27"
  on:click={() => {
    dispatch('flipped')
  }}
>
  <div
    class="absolute cursor-pointer transition inset-0 hover:(z-2) preserve-3d perspect-origin-center perspect-1000px"
  >
    <div
      class="absolute inset-1 transform rotate transform transition card-container scale-100"
      class:closed={!card || !card.flipped}
      class:touchy={hasTouch()}
      style={`--tw-rotate:${Math.random() * 6 - 3}deg`}
    >
      {#if card}
        {#if !card.flipped}
          <div
            class="card-back absolute transition inset-0 shadow-md rounded-sm"
            style=";background-image:url('{cardBacks[card.backColor]}');"
            transition:flip|local
          />{:else if card.type === 'image'}
          <div
            class="card-front"
            style="background-image:url({card.value})"
            class:incorrect={card.status === CARD_STATUS.Incorrect}
            class:correct={card.status === CARD_STATUS.Correct}
            transition:flip|local
          />
        {:else}
          <div
            class="card-front text-light-blue-800"
            class:incorrect={card.status === CARD_STATUS.Incorrect}
            class:correct={card.status === CARD_STATUS.Correct}
            class:emoji={card.type === 'emoji'}
            transition:flip|local
          >
            {card.value}
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
  .card-back {
    border: 4px solid #fff;
    background-color: #fff;
    fill: #fff;
    background-size: 100px;
    background-repeat: no-repeat;
  }

  .card-container:not(.touchy).closed:hover {
    @apply shadow-md scale-110 translate-y-1 !rotate-0;
  }
  .card-front {
    @apply hyphens-auto text-center absolute transition inset-0 shadow-md rounded-sm overflow-hidden bg-white flex justify-center items-center bg-cover border-solid border-5 border-white bg-center;
  }
  .incorrect {
    @apply border-red-400;
  }
  .correct {
    @apply border-green-400;
  }
  .emoji {
    font-size: 60px;
  }
</style>

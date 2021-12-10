import { combinations, randomArrayItem, shuffle } from './utils'
import { CARD_BACK_COLORS } from './constants'

export function createCardDeck(data, cardCount, options) {
  const nameProbability = 0.1
  let pairs = data.map((d) => {
    const left = {
      isLeft: true,
      type: 'text',
      origin: d,
      value: null,
    }
    const right = {
      isLeft: false,
      type: 'text',
      origin: d,
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

    let characteristics = options.onlyNames
      ? nameArray
      : [...d.characteristics /*...nameArray*/]
    if (d.profilePicture?.length) {
      left.type = 'image'
      left.value = d.profilePicture
    } else {
      left.type = 'text'
      left.value = d.name
      characteristics = d.characteristics
    }

    right.value = randomArrayItem(characteristics).value

    if (options.isCatMode) {
      right.type = 'image'
      right.value = d.profilePicture
    }

    return { left, right }
  })

  const cards = shuffle(
    shuffle(pairs.slice(0, cardCount))
      .map(({ left, right }, i) => {
        return [left, right].map(({ isLeft, type, value }, j) => ({
          id: i * 2 + j,
          type,
          value,
          flipped: false,
          status: 'none',
          backColor: options.isCardBackRandom
            ? randomArrayItem(CARD_BACK_COLORS)
            : isLeft
            ? 'orange'
            : 'petrol',
        }))
      })
      .flat(),
  )

  const legalPairs = []
  for (let i = 0; i < cards.length - 1; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      if (hasMatch(data, [cards[i], cards[j]])) {
        legalPairs.push([cards[i].id, cards[j].id])
      }
    }
  }

  return { legalPairs, cards }
}

function hasMatch(data, pair) {
  const [first, second] = pair
  return data.find((d) => {
    let primaryMatch = false
    if (first.type === 'image' || second.type === 'image') {
      primaryMatch =
        d.profilePicture === first.value || d.profilePicture === second.value
    } else {
      primaryMatch = d.name === first.value || d.name === second.value
    }
    const leftMatches = d.values.filter((f) => f === first.value)
    const rightMatches = d.values.filter((f) => f === second.value)

    return primaryMatch && leftMatches.length && rightMatches.length
  })
}

export function checkCards(data, cards, pickedCards, legalPairs) {
  const match = hasMatch(data, pickedCards)

  const closedCardIds = cards
    .filter((card) => !card.flipped)
    .map((card) => card.id)

  if (closedCardIds.length === 0) {
    return { isCorrect: !!match, isSolvable: true }
  }
  //easter egg
  if (pickedCards.every((p) => p.value.match(/(ruppert|jores)\.jpg$/))) {
    return { isCorrect: true, isSolvable: false }
  }

  const pairs = legalPairs.filter(([first, second]) => {
    return closedCardIds.includes(first) && closedCardIds.includes(second)
  })

  const allCombinations: any[] = combinations(pairs, closedCardIds.length / 2)
  //all combinations of pairs

  const isSolvable = allCombinations.some((combination) => {
    if (closedCardIds.length === new Set(combination.flat()).size) {
      return true
    }
    return false
  })

  return { isCorrect: !!match, isSolvable }
}

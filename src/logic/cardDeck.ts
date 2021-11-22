import { randomArrayItem, shuffle } from './utils'
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
      : [...d.characteristics, ...nameArray]
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
        return [left, right].map(({ isLeft, type, value }) => ({
          id: i,
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

  return { pairs, cards }
}

export function checkCards(pickedCards, pairs) {
  const [pickedLeft, pickedRight] = pickedCards
  return pairs.some(({left, right}, i) => {
    return (
      (pickedLeft.value === left.value && pickedRight.value === right.value) ||
      (pickedRight.value === left.value && pickedLeft.value === right.value)
    )
  })
}

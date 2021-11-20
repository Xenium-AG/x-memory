import { randomArrayItem, shuffle } from './utils'
import { CARD_BACK_COLORS } from './constants'
export function createCardDeck(data, cardCount) {

  const nameProbability = 0.2
  let pairs = data.map((d) => {
    const left = {
      type: 'text',
      origin: d,
      value: null,
    }
    const right = {
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
          backColor: randomArrayItem(CARD_BACK_COLORS),
        }))
      })
      .flat(),
  )

  return {pairs, cards}
  
}
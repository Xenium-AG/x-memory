import { randomArrayItem, split } from './utils'
const cities = split('Berlin,München,Hamburg')
const names1 = split('Anna,Max,Peter,Michael,Hans,Frank,Tina,Lea,Hannah,Rudolf')
const names2 = split('Wick,Johnson,Cooper,Gandalf,Mask,Ford')

function getRandomName() {
  return randomArrayItem(names1) + ' ' + randomArrayItem(names2)
}
function getRandomCity() {
  return randomArrayItem(cities)
}
export function getData(length) {
  return Array.from({ length }, (_, i) => ({
    id: i,
    value: i,
    flipped: false,
    profilePicture: `http://placekitten.com/${100 + 3 * i}/${100 + 3 * i}`,
    name: getRandomName(),
    characteristics: [
      { type: 'hobby', value: 'backen' },
      { type: 'hobby', value: 'singen' },
      { type: 'location', value: getRandomCity() },
    ],
  })).map((d) => ({
    ...d,
    characteristics: [...d.characteristics, { type: 'name', value: d.name }],
  }))
}

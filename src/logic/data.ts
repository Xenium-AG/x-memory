import type { Profile } from 'src/stores/store'
import { getTableRows } from './excel'
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
export function getTestData(length) {
  return Array.from({ length }, (_, i) => {
    const name = getRandomName()
    const profilePicture = `http://placekitten.com/${100 + 3 * i}/${
      100 + 3 * i
    }`
    const characteristics = [{ type: 'name', value: name }].concat([
      { type: 'location', value: getRandomCity() },
    ])
    const values = characteristics.map((c) => c.value).concat([profilePicture])
    return {
      id: i,
      accountName: name,
      profilePicture,
      name: name,
      characteristics,
      values,
    }
  })
}

export async function getData(override = null) {
  const rows = (await getTableRows()).filter((row) => row.optIn)

  if (override) {
    const index = rows.findIndex(
      (row) => row.accountName === override.accountName,
    )

    if (index >= 0) {
      rows[index] = override
    }
  }

  return rows.map((row, i) => {
    const characteristics = [{ type: 'name', value: row.name }].concat(
      row.hobbies
        .split(/[\,\.;]/g)
        .filter((h) => h.trim().length > 0)
        .map((h) => ({ type: 'hobby', value: h })),
    )
    const values = characteristics
      .map((c) => c.value)
      .concat([row.profilePicture])
    return {
      id: i,
      accountName: row.accountName,
      profilePicture: row.profilePicture,
      name: row.name,
      characteristics,
      values,
    }
  })
}

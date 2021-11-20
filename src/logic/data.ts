import * as faker from 'faker'
export function getData() {
  return Array.from({ length: 6 * 6 }, (_, i) => ({
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
}

import * as faker from 'faker'
export function getData() {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    value: i,
    flipped: false,
    profilePicture: `http://placekitten.com/${100+i}/${100+i}`,
    name: faker.name.findName(),
    characteristics: [
      { type: 'hobby', value: 'backen' },
      { type: 'hobby', value: 'singen' },
      { type: 'location', value: faker.address.cityName() },
    ],
  })).map((d) => ({
    ...d,
    characteristics: [...d.characteristics, { type: 'name', value: d.name }],
  }))
}

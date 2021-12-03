import { writable } from 'svelte/store'

export const openMenu = writable(0)

const defaultSettings = {
  numOfPairs: 12,
  onlyNames: false,
  randomCardBacks: false,
}
const defaultProfile = {
  accountName: 'lorem',
  optIn: false,
  name: 'ipsum',
  profilePicture: 'http://placekitten.com/g/200/200',
  hobbies: '',
}
const localStorageKey = 'x-memory.settings'
export const settings = writable(defaultSettings)

settings.set({
  ...defaultSettings,
  ...JSON.parse(localStorage.getItem(localStorageKey) ?? '{}'),
})

export type Profile = {
  accountName: string
  optIn: boolean
  name: string
  profilePicture: string
  hobbies: string
}

export const profile = writable(defaultProfile as Profile)

settings.subscribe((value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value))
})

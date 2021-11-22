import { writable } from 'svelte/store'

export const openMenu = writable(0)
export const numOfPairs = writable(5)
export const onlyNames = writable(false)
export const randomCardBacks = writable(false)

export const personOptIn = writable(false)
export const personPictureUrl = writable('http://placekitten.com/g/200/200')
export const personHobbies = writable('')


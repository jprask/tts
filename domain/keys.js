import { range } from "../algorithms";

// https://youtu.be/fOONIlhXFh4?t=96
export const LETTERS =
  String
    .fromCodePoint(32, ...range(122, 97))
    .split('')

const ABORT_KEYS = ['Esc', 'Escape']

const DELETE_KEYS = ['Backspace', 'Delete', 'Del']

const prettifyMap = {
  // https://ux.stackexchange.com/a/91309
  ' ': '⎵'
}

export const isLetter = key => LETTERS.includes(key)
export const isAbortKey = key => ABORT_KEYS.includes(key)
export const isDeleteKey = key => DELETE_KEYS.includes(key)

export const prettify = key => prettifyMap[key] ?? key

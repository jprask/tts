
export const divideArray = (array) => [
  array.slice(0, Math.floor(array.length / 2)),
  array.slice(Math.floor(array.length / 2), array.length),
]

import styles from '../styles/components/Keyboard.module.css'
import { LETTERS, prettify } from '../domain'
import { divideArray } from 'algorithms'

const Row = ({ items, handleClick }) =>
  <div className={styles.row}>
    {items.map(
      (letter) =>
        <button
          className={styles.key}
          key={letter}
          onClick={handleClick(letter)}
        >
          {prettify(letter)}
        </button>
    )}
  </div>

export function Keyboard({ onAddChar }) {
  const handleClick = value => () => onAddChar(value)

  const rows = divideArray(LETTERS)

  return (
    <div className={styles.container}>
      {rows.map((row, index) => <Row key={index} items={row} handleClick={handleClick} />)}
    </div>
  )
}

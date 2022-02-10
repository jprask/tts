import styles from '../styles/components/Controls.module.css'

export function Controls({ onAbort, onDelete, onPlay }) {
  return (
    <div className={styles.container}>
      <button className={styles.abortButton} onClick={onAbort}>
        abort
      </button>
      <button className={styles.deleteButton} onClick={onDelete}>
        delete
      </button>
      <button className={styles.playButton} onClick={onPlay}>
        play
      </button>
    </div>
  )
}

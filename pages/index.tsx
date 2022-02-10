import styles from '../styles/pages/index.module.css'
import { usePhrase } from '../hooks'
import { Controls, Keyboard } from '../components'
import { buildSynth } from '../use-cases'

export default function Home() {
  const {
    phrase,
    addChar,
    deleteChar,
    abort,
  } = usePhrase()

  const { play } = buildSynth({ phrase })

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.text}>{phrase}</h1>
        <Keyboard onAddChar={addChar} />
        <Controls
          onPlay={play}
          onAbort={abort}
          onDelete={deleteChar}
        />
      </div>
    </main>
  )
}

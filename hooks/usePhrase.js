import { useState } from "react";
import { useKeydown } from './useKeydown';
import { isLetter, isAbortKey, isDeleteKey } from "../domain";

export function usePhrase() {
  const [phrase, setPhrase] = useState('');

  const addChar = (value) => setPhrase(current => current + value)
  const deleteChar = () => setPhrase(current => current.slice(0, -1))
  const abort = () => setPhrase('')

  useKeydown(({ key }) => {
    const value = key.toLowerCase()

    if (isLetter(value)) {
      addChar(value)
    }
  })

  useKeydown(({ key }) => {
    if (isAbortKey(key)) abort()
    if (isDeleteKey(key)) deleteChar()
  })

  return {
    phrase,
    addChar,
    deleteChar,
    abort,
  };
}

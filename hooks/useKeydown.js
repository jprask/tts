import { useEffect } from "react"

export function useKeydown(handler) {
  useEffect(
    () => {
      window.addEventListener('keydown', handler)

      return () => window.removeEventListener('keydown', handler)
    }, 
    [handler]
  )
}

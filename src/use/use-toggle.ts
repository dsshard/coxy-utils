import { useCallback, useState } from 'react'

export function useToggle(defaultValue = false): [boolean, () => void, () => void, () => void] {
  const [isVisible, setToggle] = useState(defaultValue)

  const open = useCallback(() => setToggle(true), [])
  const close = useCallback(() => setToggle(false), [])
  const toggle = useCallback(() => setToggle(!isVisible), [isVisible])

  return [isVisible, open, close, toggle]
}

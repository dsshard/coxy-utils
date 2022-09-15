import { useCallback, useState } from 'react'

export function useToggle (defaultValue = false): [boolean, () => void, () => void] {
  const [isVisible, setToggle] = useState(defaultValue)

  const open = useCallback(() => setToggle(true), [])
  const close = useCallback(() => setToggle(false), [])

  return [isVisible, open, close]
}

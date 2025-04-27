import { useCallback, useState } from 'react'

type BreakDownObject<O, R = void> = {
  [K in keyof O as string]: K extends string
    ? R extends string
      ? // Prefix with dot notation as well
        // eslint-disable-next-line no-use-before-define
        `${R}.${K}` | ObjectDotNotation<O[K], `${R}.${K}`>
      : // eslint-disable-next-line no-use-before-define
        K | ObjectDotNotation<O[K], K>
    : never
}

type ObjectDotNotation<O, R = void> = O extends string
  ? R extends string
    ? R
    : never
  : BreakDownObject<O, R>[keyof BreakDownObject<O, R>]

function setterObjectValue(obj, keys, value) {
  const keysArray = typeof keys === 'string' ? keys.split('.') : keys
  const key = keysArray.shift()

  if (keysArray.length === 0) {
    obj[key] = value
    return obj
  }
  if (!obj[key] === undefined) {
    obj[key] = {}
  }
  setterObjectValue(obj[key], keysArray, value)
  return obj
}

export const useStateForm = <T>(initialValue?: Partial<T>) => {
  const initial = (initialValue || {}) as T
  const [values, setValuesByKey] = useState<T>(initial as T)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const clear = useCallback(() => {
    setValuesByKey(() => initial)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const setValue = useCallback(
    (key: ObjectDotNotation<T>, val?: unknown) => {
      if (val !== undefined) {
        setValuesByKey((data) => {
          const res = setterObjectValue(data, key, val)
          return { ...res }
        })
        return
      }

      return (value) => {
        setValuesByKey((data) => {
          const res = setterObjectValue(data, key, value)
          return { ...res }
        })
      }
    },
    [values],
  )

  return [values, setValue, clear] as const
}

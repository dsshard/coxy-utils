import type { PayloadAction } from '@reduxjs/toolkit'

import { objectKeys } from '../data/object-keys'

export default function patchStateReducer<T>(state: T, action: PayloadAction<Partial<T>>): void {
  const keys = objectKeys(action.payload) as (keyof T)[]
  for (const key of keys) {
    state[key] = action.payload[key] as T[keyof T]
  }
}

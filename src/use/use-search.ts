import { useCallback, useState } from 'react'

import { searchArrayFilter } from '../data/array-search-in-by-field'

export function useSearch <T> (array: T[], fields: Array<keyof T>): [(text: string) => void, T[], boolean] {
  const [searchText, setSearchText] = useState<string | null>(null)

  const handleSearch = useCallback((text: string) => {
    const trimmedText = text ? text.trim() : text
    if (!trimmedText) {
      setSearchText(null)
    } else {
      setSearchText(trimmedText)
    }
  }, [array])

  const filtered = searchText ? searchArrayFilter(array, searchText, fields as string[]) : array

  return [handleSearch, filtered, !!searchText]
}

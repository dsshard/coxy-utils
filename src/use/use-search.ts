import { useCallback, useState } from 'react'

import { searchArrayFilter } from '../data/array-search-in-by-field'

export function useSearch <T> (wallets: T[], fields: Array<keyof T>): [(text: string) => void, T[], boolean] {
  const [filteredData, setFilteredData] = useState<T[]>(wallets)
  const [isSearch, setIsSearch] = useState(false)

  const handleSearch = useCallback((text: string) => {
    const trimmedText = text ? text.trim() : text
    if (!trimmedText) {
      setIsSearch(false)
      setFilteredData(wallets)
      return
    }
    const filtered = searchArrayFilter(wallets, text, fields)
    setFilteredData(filtered)
    setIsSearch(!!trimmedText)
  }, [wallets])

  return [handleSearch, isSearch ? filteredData : wallets, isSearch]
}

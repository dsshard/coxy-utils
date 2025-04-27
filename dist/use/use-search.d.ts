declare function useSearch<T>(array: T[], fields: Array<keyof T>): [(text: string) => void, T[], boolean];

export { useSearch };

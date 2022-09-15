export declare function useSearch<T>(wallets: T[], fields: Array<keyof T>): [(text: string) => void, T[], boolean];

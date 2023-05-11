export const objectKeys = <T extends object>(obj: T): Array<keyof T> => Object.keys(obj as T) as Array<keyof typeof obj>

export const objectKeys = <T>(obj: T): Array<keyof T> => Object.keys(obj as object) as Array<keyof typeof obj>

export const randomFromArray = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)]

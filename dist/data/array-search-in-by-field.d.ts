type FieldExtractor<T> = (sub: T) => string;
declare function escapeRegex(string: string): string;
declare function searchArrayFilter<T>(array: T[], searchString: string, _fields: (keyof T)[] | FieldExtractor<T>): T[];

export { escapeRegex, searchArrayFilter };

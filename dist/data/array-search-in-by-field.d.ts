declare type FieldExtractor<T> = (sub: T) => string;
export declare function escapeRegex(string: string): string;
export declare function searchArrayFilter<T>(array: T[], searchString: string, _fields: (keyof T)[] | FieldExtractor<T>): T[];
export {};

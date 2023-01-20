declare type FieldExtractor = (sub: string) => string;
export declare function searchArrayFilter(array: any[], searchString: string, _fields: string[] | FieldExtractor): any[];
export {};

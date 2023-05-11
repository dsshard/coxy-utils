declare type BreakDownObject<O, R = void> = {
    [K in keyof O as string]: K extends string ? R extends string ? `${R}.${K}` | ObjectDotNotation<O[K], `${R}.${K}`> : K | ObjectDotNotation<O[K], K> : never;
};
declare type ObjectDotNotation<O, R = void> = O extends string ? R extends string ? R : never : BreakDownObject<O, R>[keyof BreakDownObject<O, R>];
export declare const useStateForm: <T>(initialValue?: Partial<T>) => readonly [T, (key: ObjectDotNotation<T, void>, val?: string) => (value: any) => void, () => void];
export {};

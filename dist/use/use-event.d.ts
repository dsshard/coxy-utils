type AnyFunction = (...args: any[]) => any;
declare function useEvent<T extends AnyFunction>(callback: T): T;

export { useEvent };

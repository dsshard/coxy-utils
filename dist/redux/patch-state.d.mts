import { PayloadAction } from '@reduxjs/toolkit';

declare function patchStateReducer<T>(state: T, action: PayloadAction<Partial<T>>): void;

export { patchStateReducer as default };

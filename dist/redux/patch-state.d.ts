import { PayloadAction } from '@reduxjs/toolkit';
export default function patchStateReducer<T>(state: T, action: PayloadAction<Partial<T>>): void;

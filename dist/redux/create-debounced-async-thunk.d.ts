import { AsyncThunkPayloadCreator, AsyncThunk } from '@reduxjs/toolkit';
declare type DebounceSettings = {
    wait: number;
    maxWait?: number;
    leading?: boolean;
};
declare const createDebouncedAsyncThunk: <Returned, ThunkArg = void>(typePrefix: string, options: DebounceSettings, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>) => AsyncThunk<Returned, ThunkArg, object>;
export declare const isConditionError: (toBeDetermined: unknown) => toBeDetermined is {
    name: 'ConditionError';
    message: string;
};
export default createDebouncedAsyncThunk;

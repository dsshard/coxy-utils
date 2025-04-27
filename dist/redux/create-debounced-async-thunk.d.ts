import { AsyncThunkPayloadCreator, AsyncThunk } from '@reduxjs/toolkit';

type DebounceSettings = {
    wait: number;
    maxWait?: number;
    leading?: boolean;
};
declare const createDebouncedAsyncThunk: <Returned, ThunkArg = void>(typePrefix: string, options: DebounceSettings, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>) => AsyncThunk<Returned, ThunkArg, object>;
declare const isConditionError: (toBeDetermined: unknown) => toBeDetermined is {
    name: "ConditionError";
    message: string;
};

export { createDebouncedAsyncThunk as default, isConditionError };

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
export declare const thunkMiddleware: ({ dispatch, getState }: {
    dispatch: Dispatch;
    getState: any;
}) => (next: (action: AnyAction) => void) => (action: (dispatch: Dispatch, state: any) => void) => void;

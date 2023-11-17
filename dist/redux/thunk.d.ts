export declare const thunkMiddleware: ({ dispatch, getState }: {
    dispatch: any;
    getState: any;
}) => (next: (action: any) => void) => (action: (dispatch: any, state: any) => void) => void;

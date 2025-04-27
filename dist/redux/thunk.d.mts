import * as redux_thunk from 'redux-thunk';
import * as redux from 'redux';

declare const thunkMiddleware: redux_thunk.ThunkMiddleware<any, redux.AnyAction, undefined> & {
    withExtraArgument<ExtraThunkArg, State = any, BasicAction extends redux.Action<any> = redux.AnyAction>(extraArgument: ExtraThunkArg): redux_thunk.ThunkMiddleware<State, BasicAction, ExtraThunkArg>;
};

export { thunkMiddleware };

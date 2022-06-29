import {
  createReducer,
  AnyAction,
  AsyncThunk,
  isPending,
} from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const isPendingAction = (action: AnyAction): action is PendingAction => {
  return action.type.endsWith('/pending');
};

const isRejectedAction = (action: AnyAction): action is RejectedAction => {
  return action.type.endsWith('/rejected');
};

const isFulfilledAction = (action: AnyAction): action is FulfilledAction => {
  return action.type.endsWith('/fulfilled');
};

interface IStatusState {
  [key: string]: string;
}

const initialState: IStatusState = {
  requestId: '',
};

export const statusReducer = createReducer(initialState, builder => {
  builder
    .addMatcher(isPendingAction, (state, action) => {
      state.requestId = action.meta.requestId;
      state[action.meta.requestId] = 'Loading';
    })
    .addMatcher(isRejectedAction, (state, action) => {
      state.requestId = action.meta.requestId;
      state[action.meta.requestId] = 'Error';
    })
    .addMatcher(isFulfilledAction, (state, action) => {
      state.requestId = action.meta.requestId;
      state[action.meta.requestId] = 'Success';
    });
});

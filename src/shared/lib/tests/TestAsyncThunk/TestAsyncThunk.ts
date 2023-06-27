import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: (
    arg: Arg
  ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

  constructor(
    actionCreator: (
      arg: Arg
    ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}

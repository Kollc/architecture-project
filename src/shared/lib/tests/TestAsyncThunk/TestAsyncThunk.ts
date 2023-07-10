import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import axios, { type AxiosStatic } from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: (
    arg: Arg
  ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: (
      arg: Arg
    ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}

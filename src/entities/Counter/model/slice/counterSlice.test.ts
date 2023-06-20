import { counterReducer, counterActions } from './counterSlice';
import { type CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('check decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.dec)).toEqual({ value: 9 });
  });

  test('check increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.inc)).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.inc)).toEqual({ value: 1 });
  });
});

import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'app/providers/StoreProvider/types/store';
import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};

interface useAsyncReducerParams {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

const useAsyncReducer = ({
  reducers,
  removeAfterUnmount = true,
}: useAsyncReducerParams): { status: undefined | string } => {
  const store = useStore() as ReduxStoreWithManager;
  const [status, setStatus] = useState<undefined | string>(undefined);
  const dispatch = useAppDispatch();

  // При монтировании компонента мы добавляем редюсер, а при демонтировании удаляем
  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
      setStatus('add');
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([key, reducer]: ReducersListEntry) => {
            store.reducerManager.remove(key);
            dispatch({ type: `@DESTROY ${key} reducer` });
            setStatus('remove');
          }
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status };
};

export default useAsyncReducer;
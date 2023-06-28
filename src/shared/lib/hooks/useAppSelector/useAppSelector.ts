import { type StateSchema } from 'app/providers/StoreProvider';
import { type TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

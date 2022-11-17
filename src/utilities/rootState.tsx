//// rootState.tsx - utility file for defining types for Redux + TypeScript
import { store } from '../index';

// useSelector(state: RootState)
export type RootState = ReturnType<typeof store.getState>

// useDispatch() - for thunks & other middleware
export type AppDispatch = typeof store.dispatch;
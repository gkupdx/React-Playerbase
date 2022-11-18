//// rootState.tsx - utility file for defining types for Redux + TypeScript
import { useDispatch } from 'react-redux';
import { store } from '../index';

// useSelector(state: RootState)
export type RootState = ReturnType<typeof store.getState>

// useDispatch() - for thunks & other middleware
export type AppDispatch = typeof store.dispatch;

// useDispatch() - dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>();
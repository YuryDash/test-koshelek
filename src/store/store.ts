import {Exchange, exchangerReducer} from "./reducers/exchanger-reducer";
import { createStore, combineReducers } from 'redux';
import {useDispatch, useSelector,} from "react-redux";

const rootReducer = combineReducers({
  exchanger: exchangerReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = () => useSelector<AppRootStateType, Exchange>(state => state.exchanger)

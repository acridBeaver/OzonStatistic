import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {fetch_reducer} from "./fetch_backend_api";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({fetch_reducer: fetch_reducer});

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useTypeDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof rootReducer>
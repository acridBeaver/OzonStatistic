import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {fetchAdvertisementReducer} from "./backend_api/fetch_advertisement";
import {useDispatch} from "react-redux";
import {fetchProfileReducer} from "./backend_api/fetch_profile";

const rootReducer = combineReducers({
    fetchAdvertisementReducer: fetchAdvertisementReducer,
    fetchProfileReducer : fetchProfileReducer
});

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useTypeDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof rootReducer>
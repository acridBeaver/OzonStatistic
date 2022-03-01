import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {fetch_reducer} from "./fetch_backend_api";

const rootReducer = combineReducers({fetch_reducer: fetch_reducer});

export const store = configureStore({reducer: rootReducer})
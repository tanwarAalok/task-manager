'use client'

import { configureStore } from '@reduxjs/toolkit';
import {enableMapSet} from "immer";
import boardReducer from './boardSlice';
import taskReducer from './taskSlice';
import authReducer from './authSlice';

enableMapSet();

export const store = configureStore({
    reducer: {
        board: boardReducer,
        task: taskReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

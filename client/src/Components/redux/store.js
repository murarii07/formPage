// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mySliceReducer from './flag'

export const store = configureStore({
    reducer: {
        // Add your slice reducers here
        resultFlag: mySliceReducer,
    },
    // Optional: Add middleware or other configuration options here
});

export default store;

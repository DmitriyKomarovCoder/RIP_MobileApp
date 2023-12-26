import { configureStore } from '@reduxjs/toolkit';
import {companyReducer} from './companySlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        company: companyReducer,
        filter: filterReducer,
    },
});

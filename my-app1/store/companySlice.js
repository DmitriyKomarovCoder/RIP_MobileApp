// companySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies_list: [],
    company: { name: "" },
};

export const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies: (state, { payload }) => {
            console.log(payload);
            state.companies_list = payload.companies_list;
        },
        setCompany: (state, { payload }) => {
            console.log(payload);
            state.company = payload.company;
        },
        resetCompany: (state) => {
            state.company = {};
        },
    },
});

export const companyReducer = companySlice.reducer;

export const { setCompanies, setCompany, resetCompany } = companySlice.actions;

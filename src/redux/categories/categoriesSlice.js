import { createSlice } from '@reduxjs/toolkit';
// import { addExpensiveCategoryAPI } from 'services/fireBaseAPI';
import {
  addIncomeCategory,
  addExpensiveCategory,
} from './categoriesOperations';
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    income: [],
    expensive: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    removeExpensiveCategory: (state, { payload }) => {
      state.expensive = state.expensive.filter(({ id }) => id !== payload);
      // return {
      //   ...state,
      //   expensive: state.expensive.filter(({ id }) => id !== payload),
      // };
    },
    removeIncomeCategory: (state, { payload }) => {
      state.income = state.income.filter(({ id }) => id !== payload);
      // return {
      //   ...state,
      //   expensive: state.expensive.filter(({ id }) => id !== payload),
      // };
    },
    addExpensiveCategory: (state, { payload }) => {
      state.expensive.push(payload);
    },
    addIncomeCategory: (state, { payload }) => {
      state.income.push(payload);
    },
  },
  extraReducers: {
    [addIncomeCategory.pending]: state => {
      state.isLoading = true;
    },
    [addIncomeCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income.push(payload);
    },
    [addIncomeCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addExpensiveCategory.pending]: state => {
      state.isLoading = true;
    },
    [addExpensiveCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.expensive.push(payload);
    },
    [addExpensiveCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const {
  removeExpensiveCategory,
  removeIncomeCategory,
  // addExpensiveCategory,
  // addIncomeCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

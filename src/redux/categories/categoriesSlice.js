import { createSlice } from '@reduxjs/toolkit';
// import { addExpensiveCategoryAPI } from 'services/fireBaseAPI';
import {
  addIncomeCategory,
  addExpensiveCategory,
  getCategoriesOperation,
  deleteExpensiveCategories,
  deleteIncomeCategories,
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
    [getCategoriesOperation('income').pending]: state => {
      state.isLoading = true;
    },
    [getCategoriesOperation('income').fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income = payload;
    },
    [getCategoriesOperation('income').rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCategoriesOperation('expensive').pending]: state => {
      state.isLoading = true;
    },
    [getCategoriesOperation('expensive').fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.expensive = payload;
    },
    [getCategoriesOperation('expensive').rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteExpensiveCategories.pending]: state => {
      state.isLoading = true;
    },
    [deleteExpensiveCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.expensive = state.expensive.filter(item => item.id !== payload);
    },
    [deleteExpensiveCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteIncomeCategories.pending]: state => {
      state.isLoading = true;
    },
    [deleteIncomeCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income = state.income.filter(item => item.id !== payload);
    },
    [deleteIncomeCategories.rejected]: (state, { payload }) => {
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

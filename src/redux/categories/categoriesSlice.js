import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    income: [],
    expensive: [],
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
});
export const {
  removeExpensiveCategory,
  removeIncomeCategory,
  addExpensiveCategory,
  addIncomeCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

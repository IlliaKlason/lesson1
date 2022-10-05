import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { TRANSACTION_ADD_EXPENSIVE, TRANSACTION_ADD_INCOME } from './constants';
import {
  addExpensiveTransactions,
  addIncomeTransactions,
} from './transactionOperation';
// eslint-disable-next-line
// const state = {
//   income: [],
//   expensive: [],
// };

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    expensive: [],
    income: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addIncomeTransactions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addIncomeTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.income.push(payload);
    },
    [addIncomeTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addExpensiveTransactions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addExpensiveTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.expensive.push(payload);
    },
    [addExpensiveTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transactionSlice.reducer;
// const incomeReducer = (state = [], action) => {
//   switch (action.type) {
//     case TRANSACTION_ADD_INCOME:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
// const expensiveReducer = (state = [], action) => {
//   switch (action.type) {
//     case TRANSACTION_ADD_EXPENSIVE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
// export const transactionReducer = combineReducers({
//   income: incomeReducer,
//   expensive: expensiveReducer,
// });

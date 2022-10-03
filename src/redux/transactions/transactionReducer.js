import { combineReducers } from 'redux';
import { TRANSACTION_ADD_EXPENSIVE, TRANSACTION_ADD_INCOME } from './constants';

const state = {
  income: [],
  expensive: [],
};

const incomeReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_ADD_INCOME:
      return [...state, action.payload];
    default:
      return state;
  }
};
const expensiveReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_ADD_EXPENSIVE:
      return [...state, action.payload];
    default:
      return state;
  }
};
export const transactionReducer = combineReducers({
  income: incomeReducer,
  expensive: expensiveReducer,
});

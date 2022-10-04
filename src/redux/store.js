import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { transactionReducer } from './transactions/transactionReducer';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../redux/categories/categoriesSlice';

const state = {
  transactions: {
    income: [],
    expensive: [],
  },
};

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoriesReducer,
});

export const store = configureStore({ reducer: rootReducer });

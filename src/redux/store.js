import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { transactionReducer } from './transactions/transactionReducer';

const state = {
  transactions: {
    income: [],
    expensive: [],
  },
};

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

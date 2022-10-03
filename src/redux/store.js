import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { transactionReducer } from './transactions/transactionReducer';

const state = {
  transaction: {
    income: [],
    expensive: [],
  },
};

const rootReducer = combineReducers({
  transaction: transactionReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

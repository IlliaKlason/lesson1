import { TRANSACTION_ADD_EXPENSIVE, TRANSACTION_ADD_INCOME } from './constants';

const addIncome = transaction => {
  return {
    type: TRANSACTION_ADD_INCOME,
    payload: transaction,
  };
};
const addExpensive = transaction => {
  return {
    type: TRANSACTION_ADD_EXPENSIVE,
    payload: transaction,
  };
};

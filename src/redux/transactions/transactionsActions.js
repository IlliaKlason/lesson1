import { TRANSACTION_ADD_EXPENSIVE, TRANSACTION_ADD_INCOME } from './constants';

export const addIncome = transaction => {
  return {
    type: TRANSACTION_ADD_INCOME,
    payload: transaction,
  };
};
export const addExpensive = transaction => {
  return {
    type: TRANSACTION_ADD_EXPENSIVE,
    payload: transaction,
  };
};

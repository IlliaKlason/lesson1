import { createContext, useState, useEffect } from 'react';

import { getInitialState, setToLS } from '../helpers';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [expensive, setExpensive] = useState(getInitialState('expensive', []));
  const [income, setIncome] = useState(getInitialState('income', []));

  const addTransaction = transaction => {
    const { transactionType } = transaction;
    if (transactionType === 'income') {
      setIncome(prevIncome => {
        return [...prevIncome, transaction];
      });
    }
    if (transactionType === 'expensive') {
      setExpensive(prevExpensive => {
        return [...prevExpensive, transaction];
      });
    }
  };

  useEffect(() => {
    setToLS('expensive', expensive);
  }, [expensive]);
  useEffect(() => {
    setToLS('income', income);
  }, [income]);
  return (
    <TransactionContext.Provider value={{ addTransaction, expensive, income }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

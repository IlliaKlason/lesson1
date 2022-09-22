import { createContext, useState, useEffect, useRef } from 'react';

import { getInitialState, setToLS } from '../helpers';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [expensive, setExpensive] = useState(getInitialState('expensive', []));
  const [income, setIncome] = useState(getInitialState('income', []));

  const isFirstRenderRef = useRef({
    i: true,
    e: true,
  });

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
    if (isFirstRenderRef.current.e) {
      isFirstRenderRef.current.e = false;
      return;
    }
    setToLS('expensive', expensive);
  }, [expensive]);

  useEffect(() => {
    // isFirstRenderRef.current = true;
    if (isFirstRenderRef.current.i) {
      isFirstRenderRef.current.i = false;
      return;
    }
    setToLS('income', income);
  }, [income]);
  return (
    <TransactionContext.Provider value={{ addTransaction, expensive, income }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

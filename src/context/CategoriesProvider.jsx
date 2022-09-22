import { createContext, useState, useEffect } from 'react';
import { getInitialState, setToLS } from '../helpers';

export const CategoriesContext = createContext();
const CategoriesProvider = ({ children }) => {
  const [expensiveCategories, setExpensiveCategories] = useState(
    getInitialState('expensiveCategories', [])
  );
  const [incomeCategories, setIncomeCategories] = useState(
    getInitialState('incomeCategories', [])
  );
  const deleteCategory = (id, transactionType) => {
    if (transactionType === 'expensive') {
      setExpensiveCategories(prevExpensive => {
        return prevExpensive.filter(expCategory => expCategory.id !== id);
      });
    }
    if (transactionType === 'income') {
      setIncomeCategories(prevIncome => {
        return prevIncome.filter(incCategory => incCategory.id !== id);
      });
    }
  };

  const addCategory = (category, transactionType) => {
    if (transactionType === 'income') {
      setIncomeCategories(prevIncome => {
        return [...prevIncome, category];
      });
    }
    if (transactionType === 'expensive') {
      setExpensiveCategories(prevExpensive => {
        return [...prevExpensive, category];
      });
    }
  };

  useEffect(() => {
    setToLS('expensiveCategories', expensiveCategories);
  }, [expensiveCategories]);
  useEffect(() => {
    setToLS('incomeCategories', incomeCategories);
  }, [incomeCategories]);

  return (
    <CategoriesContext.Provider
      value={{
        deleteCategory,
        addCategory,
        expensiveCategories,
        incomeCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

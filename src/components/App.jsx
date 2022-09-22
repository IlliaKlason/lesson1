import { useState, useEffect } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';

import { getInitialState, setToLS } from '../helpers';

export const App = () => {
  const [activePage, setActivePage] = useState('main');

  const [expensiveCategories, setExpensiveCategories] = useState(
    getInitialState('expensiveCategories')
  );
  const [incomeCategories, setIncomeCategories] = useState(
    getInitialState('incomeCategories')
  );

  useEffect(() => {
    setToLS('expensiveCategories', expensiveCategories);
  }, [expensiveCategories]);
  useEffect(() => {
    setToLS('incomeCategories', incomeCategories);
  }, [incomeCategories]);

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
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

  return (
    <Container>
      {activePage === 'main' ? (
        <MainPage
          changePageHandler={changePageHandler}
          addCategory={addCategory}
          deleteCategory={deleteCategory}
          categories={{
            expensiveCategories,
            incomeCategories,
          }}
        />
      ) : (
        <TransactionHistoryPage
          transactionType={activePage}
          changePageHandler={changePageHandler}
          // transactions={activePage === 'expensive' ? expensive : income}
        />
      )}
    </Container>
  );
};

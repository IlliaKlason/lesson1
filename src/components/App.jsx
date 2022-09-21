import { useState, useEffect } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';

const getInitialState = KEY => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};
const setToLS = (KEY, data) => {
  return localStorage.setItem(KEY, JSON.stringify(data));
};
export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [expensive, setExpensive] = useState(getInitialState('expensive'));
  const [income, setIncome] = useState(getInitialState('income'));
  const [expensiveCategories, setExpensiveCategories] = useState(
    getInitialState('expensiveCategories')
  );
  const [incomeCategories, setIncomeCategories] = useState(
    getInitialState('incomeCategories')
  );

  useEffect(() => {
    setToLS('expensive', expensive);
  }, [expensive]);
  useEffect(() => {
    setToLS('income', income);
  }, [income]);
  useEffect(() => {
    setToLS('expensiveCategories', expensiveCategories);
  }, [expensiveCategories]);
  useEffect(() => {
    setToLS('incomeCategories', incomeCategories);
  }, [incomeCategories]);

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
  };

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
          addTransaction={addTransaction}
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
          transactions={activePage === 'expensive' ? expensive : income}
        />
      )}
    </Container>
  );
};

import { useState } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';

export const App = () => {
  const [activePage, setActivePage] = useState('main');

  const changePageHandler = (page = 'main') => {
    setActivePage(page);
  };

  return (
    <Container>
      {activePage === 'main' ? (
        <MainPage changePageHandler={changePageHandler} />
      ) : (
        <TransactionHistoryPage
          transactionType={activePage}
          changePageHandler={changePageHandler}
        />
      )}
    </Container>
  );
};

import { useState } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  // const [activePage, setActivePage] = useState('main');

  // const changePageHandler = (page = 'main') => {
  //   setActivePage(page);
  // };

  return (
    <Container>
      {/* {activePage === 'main' ? (
        <MainPage changePageHandler={changePageHandler} />
      ) : (
        <TransactionHistoryPage
          transactionType={activePage}
          changePageHandler={changePageHandler}
        />
      )} */}
      <Routes>
        <Route path="/transaction" element={<MainPage />} />
        <Route
          path="/history/:transactionType"
          element={<TransactionHistoryPage />}
        />
      </Routes>
    </Container>
  );
};

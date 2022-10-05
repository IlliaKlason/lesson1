import Header from 'components/Header';
import { useEffect, useState } from 'react';

import {
  List,
  Item,
  MainWrapper,
  DateContainer,
  Summary,
  Currency,
} from './TransactionHistoryPage.styled';
// import { TransactionContext } from '../../context';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../redux/transactions/transactionOperation';

const TransactionHistoryPage = () => {
  const dispatch = useDispatch();
  const { transactionType } = useParams();
  const [idMenu, setIdMenu] = useState('');
  const transactionsValue = useSelector(state => state.transactions);
  const transactions = transactionsValue[transactionType];

  useEffect(() => {
    if (transactions.length === 0) dispatch(getTransactions());
  }, [dispatch, transactions]);

  const handleOpenMenu = id => {
    setIdMenu(prevIdMenu => {
      return prevIdMenu === id ? '' : id;
    });
  };
  return (
    <>
      <Header
        to={'/transaction'}
        title={transactionType === 'income' ? 'Income' : 'Expensive'}
        // closeCategory={changePageHandler}
      />
      <List>
        {transactions.map(({ id, date, time, comment, summary, currency }) => {
          return (
            <Item key={id}>
              <MainWrapper>
                <div>
                  <DateContainer>
                    <span>{date}</span>
                    <span>{time}</span>
                  </DateContainer>
                  <p>{comment}</p>
                </div>
                <div>
                  <Summary>{summary}</Summary>
                  <Currency>{currency}</Currency>
                </div>
              </MainWrapper>
              <button type="button" onClick={() => handleOpenMenu(id)}>
                OPTIONS
              </button>
              {idMenu === id && (
                <ul>
                  <li>
                    <button type="button">Edit</button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        transactionsValue.deleteTransaction(id, transactionType)
                      }
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              )}
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistoryPage;

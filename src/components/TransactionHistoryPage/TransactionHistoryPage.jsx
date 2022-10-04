import Header from 'components/Header';
import { useState } from 'react';

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
import { useSelector } from 'react-redux';

const TransactionHistoryPage = () =>
  // {
  //   // transactionType,
  //   // changePageHandler,
  //   // // transactions,
  // }
  {
    const { transactionType } = useParams();
    const [idMenu, setIdMenu] = useState('');
    const transactionsValue = useSelector(state => state.transactions);
    const transactions = transactionsValue[transactionType];

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
          {transactions.map(
            ({ id, date, time, comment, summary, currency }) => {
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
                            transactionsValue.deleteTransaction(
                              id,
                              transactionType
                            )
                          }
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  )}
                </Item>
              );
            }
          )}
        </List>
      </>
    );
  };

export default TransactionHistoryPage;

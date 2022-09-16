import Header from 'components/Header';
import {
  List,
  Item,
  MainWrapper,
  DateContainer,
  Summary,
  Currency,
} from './TransactionHistoryPage.styled';

const TransactionHistoryPage = ({
  transactionType,
  changePageHandler,
  transactions,
}) => {
  return (
    <>
      <Header
        title={transactionType === 'income' ? 'Income' : 'Expensive'}
        closeCategory={changePageHandler}
      />
      {/* <h2>TransactionHistoryPage {'transactionType'}</h2> */}
      {/* 
      <button type="button" onClick={() => changePageHandler('main')}>
        Back to Main
      </button> */}
      <List>
        {transactions.map(({ date, time, comment, summary, currency }) => {
          return (
            <Item key={Date.now()}>
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
              <button type="button">OPTIONS</button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistoryPage;

const TransactionHistoryPage = ({
  transactionType,
  changePageHandler,
  transactions,
}) => {
  return (
    <>
      <h2>TransactionHistoryPage {transactionType}</h2>

      <button type="button" onClick={() => changePageHandler('main')}>
        Back to Main
      </button>
      <ul>
        {transactions.map(() => {
          return (
            <li key={Date.now()}>
              <div>
                <p>
                  <span>date</span>
                  <span>time</span>
                </p>
                <p>comment</p>
              </div>
              <div>
                <p>summary</p>
                <p>currency</p>
              </div>
              <button type="button">OPTIONS</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionHistoryPage;

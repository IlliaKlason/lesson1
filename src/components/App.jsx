import { Component } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';

export class App extends Component {
  state = {
    activePage: 'main',
    transactions: [],
  };
  changePageHandler = page => {
    this.setState({ activePage: page });
  };

  addTransaction = transaction => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, transaction],
    }));
  };
  render() {
    return (
      <div>
        {this.state.activePage === 'main' ? (
          <MainPage
            changePageHandler={this.changePageHandler}
            addTransaction={this.addTransaction}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={this.state.activePage}
            changePageHandler={this.changePageHandler}
            transactions={this.state.transactions}
          />
        )}
      </div>
    );
  }
}

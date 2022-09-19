import { Component } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';

export class App extends Component {
  state = { activePage: 'main', expensive: [], income: [] };

  changePageHandler = (page = 'main') => {
    this.setState({ activePage: page });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.expensive !== this.state.expensive) {
      localStorage.setItem('expensive', JSON.stringify(this.state.expensive));
    }
    if (prevState.income !== this.state.income) {
      localStorage.setItem('expensive', JSON.stringify(this.state.income));
    }
  }
  componentDidMount() {
    const income = JSON.parse(localStorage.getItem('income'));
    const expensive = JSON.parse(localStorage.getItem('expensive'));
    this.setState({
      income: income,
      expensive: expensive,
    });
  }

  addTransaction = transaction => {
    const { transactionType } = transaction;
    this.setState(prevState => ({
      [transactionType]: [...prevState[transactionType], transaction],
    }));
  };
  render() {
    const { expensive, income, activePage } = this.state;
    return (
      <Container>
        {this.state.activePage === 'main' ? (
          <MainPage
            changePageHandler={this.changePageHandler}
            addTransaction={this.addTransaction}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={activePage}
            changePageHandler={this.changePageHandler}
            transactions={activePage === 'expensive' ? expensive : income}
          />
        )}
      </Container>
    );
  }
}

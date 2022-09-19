import { Component } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import Container from './Container';

export class App extends Component {
  state = {
    activePage: 'main',
    expensive: [],
    income: [],
    expensiveCategories: [],
    incomeCategories: [],
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
    const income = JSON.parse(localStorage.getItem('income')) || [];
    const expensive = JSON.parse(localStorage.getItem('expensive')) || [];
    this.setState({
      income: income,
      expensive: expensive,
    });
  }

  changePageHandler = (page = 'main') => {
    this.setState({ activePage: page });
  };

  addTransaction = transaction => {
    const { transactionType } = transaction;
    this.setState(prevState => ({
      [transactionType]: [...prevState[transactionType], transaction],
    }));
  };

  addCategory = (category, transactionType) => {
    this.setState(prev => {
      return transactionType === 'expensive'
        ? { expensiveCategories: [...prev.expensiveCategories, category] }
        : { incomeCategories: [...prev.incomeCategories, category] };
    });
  };
  //   {
  //     id: 1,
  //     category: 'food',
  //  }
  render() {
    const {
      expensive,
      income,
      activePage,
      expensiveCategories,
      incomeCategories,
    } = this.state;
    return (
      <Container>
        {this.state.activePage === 'main' ? (
          <MainPage
            changePageHandler={this.changePageHandler}
            addTransaction={this.addTransaction}
            addCategory={this.addCategory}
            categories={{
              expensiveCategories,
              incomeCategories,
            }}
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

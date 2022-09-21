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
      localStorage.setItem('income', JSON.stringify(this.state.income));
    }
    if (prevState.expensiveCategories !== this.state.expensiveCategories) {
      localStorage.setItem(
        'expensiveCategories',
        JSON.stringify(this.state.expensiveCategories)
      );
    }
    if (prevState.incomeCategories !== this.state.incomeCategories) {
      localStorage.setItem(
        'incomeCategories',
        JSON.stringify(this.state.incomeCategories)
      );
    }
  }

  componentDidMount() {
    const income = JSON.parse(localStorage.getItem('income')) || [];
    const expensive = JSON.parse(localStorage.getItem('expensive')) || [];
    const incomeCategories =
      JSON.parse(localStorage.getItem('incomeCategories')) || [];
    const expensiveCategories =
      JSON.parse(localStorage.getItem('expensiveCategories')) || [];
    this.setState({
      income,
      expensive,
      incomeCategories,
      expensiveCategories,
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
  deleteCategory = (id, transactionType) => {
    this.setState(prev => {
      return transactionType === 'expensive'
        ? {
            expensiveCategories: prev.expensiveCategories.filter(
              expCategory => expCategory.id !== id
            ),
          }
        : {
            incomeCategories: prev.incomeCategories.filter(
              incCategory => incCategory.id !== id
            ),
          };
    });
  };

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
            deleteCategory={this.deleteCategory}
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

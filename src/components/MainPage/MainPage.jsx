import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
// import { categoriesList } from '../../data/categoriesList';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
    date: '',
    time: '',
    category: 'food',
    summary: '',
    currency: 'UAH',
    comment: '',
    transactionType: 'expensive',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  openCategory = () => {
    this.setState({ isCategories: true });
  };
  closeCategory = () => {
    this.setState({ isCategories: false });
  };

  setCategory = category => {
    this.setState({ category });
    this.closeCategory();
  };

  render() {
    const { isCategories, ...stateProps } = this.state;
    const { addTransaction, changePageHandler, addCategory, categories } =
      this.props;
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Wallet" />
            <TransactionForm
              openCategory={this.openCategory}
              stateProps={stateProps}
              handleChange={this.handleChange}
              cbHandelSubmit={addTransaction}
            />
            <MainButtons changePageHandler={changePageHandler} />
          </>
        ) : (
          <>
            <Header
              title="Categories"
              btnContent={'back'}
              closeCategory={this.closeCategory}
            />
            <Categories
              addCategory={addCategory}
              setCategory={this.setCategory}
              categoriesList={
                stateProps.transactionType === 'expensive'
                  ? categories.expensiveCategories
                  : categories.incomeCategories
              }
              closeCategory={this.closeCategory}
              transactionType={stateProps.transactionType}
            />
          </>
        )}
      </>
    );
  }
}
export default MainPage;

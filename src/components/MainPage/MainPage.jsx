import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from '../../data/categoriesList';
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
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Wallet" />
            <TransactionForm
              openCategory={this.openCategory}
              stateProps={stateProps}
              handleChange={this.handleChange}
              cbHandelSubmit={this.props.addTransaction}
            />
            <MainButtons changePageHandler={this.props.changePageHandler} />
          </>
        ) : (
          <>
            <Header
              title="Categories"
              btnContent={'back'}
              closeCategory={this.closeCategory}
            />
            <Categories
              setCategory={this.setCategory}
              categoriesList={categoriesList}
              closeCategory={this.closeCategory}
            />
          </>
        )}
      </>
    );
  }
}
export default MainPage;

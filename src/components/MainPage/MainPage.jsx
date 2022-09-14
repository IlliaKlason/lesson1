import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from '../../data/categoriesList';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
  };
  openCategory = () => {
    this.setState({ isCategories: true });
  };
  closeCategory = () => {
    this.setState({ isCategories: false });
  };
  render() {
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Журнал расходов" />
            <TransactionForm openCategory={this.openCategory} />
            <MainButtons changePageHandler={this.props.changePageHandler} />
          </>
        ) : (
          <Categories
            categoriesList={categoriesList}
            closeCategory={this.closeCategory}
          />
        )}
      </>
    );
  }
}
export default MainPage;

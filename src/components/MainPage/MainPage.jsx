import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from '../../data/categoriesList';

const MainPage = ({ changePageHandler }) => {
  return (
    <>
      <Header title="Журнал расходов" />
      <main>
        <TransactionForm />
        <MainButtons changePageHandler={changePageHandler} />
        <Categories categoriesList={categoriesList} />
      </main>
    </>
  );
};
export default MainPage;

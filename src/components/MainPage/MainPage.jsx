import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons';
import Categories from 'components/Categories';
// import { categoriesList } from '../../data/categoriesList';
import { useState } from 'react';
const initialForm = {
  isCategories: false,
  date: '',
  time: '',
  category: 'food',
  summary: '',
  currency: 'UAH',
  comment: '',
  transactionType: 'expensive',
};
const MainPage = ({
  addTransaction,
  changePageHandler,
  addCategory,
  deleteCategory,
  categories,
}) => {
  const [form, setForm] = useState({
    date: '',
    time: '',
    category: 'food',
    summary: '',
    currency: 'UAH',
    comment: '',
    transactionType: 'expensive',
  });
  const [isCategories, setIsCategories] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const openCategory = () => {
    setIsCategories(true);
  };
  const closeCategory = () => {
    setIsCategories(false);
  };

  const setCategory = category => {
    setForm(prevForm => {
      return { ...prevForm, category };
    });
    closeCategory();
  };
  const reset = () => {
    setForm(initialForm);
  };
  return (
    <>
      {!isCategories ? (
        <>
          <Header title="Wallet" />
          <TransactionForm
            openCategory={openCategory}
            stateProps={form}
            handleChange={handleChange}
            // cbHandelSubmit={addTransaction}
            reset={reset}
          />
          <MainButtons changePageHandler={changePageHandler} />
        </>
      ) : (
        <>
          <Header
            title="Categories"
            btnContent={'back'}
            closeCategory={closeCategory}
          />
          <Categories
            deleteCategory={deleteCategory}
            addCategory={addCategory}
            setCategory={setCategory}
            closeCategory={closeCategory}
            transactionType={form.transactionType}
          />
        </>
      )}
    </>
  );
};

export default MainPage;

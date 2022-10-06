import PropTypes from 'prop-types';
// import { useContext } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIncomeCategory,
  addExpensiveCategory,
} from 'redux/categories/categoriesOperations';
// import { CategoriesContext } from '../../context';
import {
  // addExpensiveCategory,
  // addIncomeCategory,
  removeExpensiveCategory,
  removeIncomeCategory,
} from '../../redux/categories/categoriesSlice';

const Categories = ({ setCategory, transactionType }) => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories);

  const categoriesList =
    transactionType === 'expensive' ? categories.expensive : categories.income;

  const [input, setInput] = useState('');
  const [idMenu, setIdMenu] = useState('');

  const handleChange = e => {
    setInput(e.target.value.trimStart());
  };
  const reset = () => {
    setInput('');
  };
  const handleOpenMenu = id => {
    setIdMenu(prevIdMenu => {
      return prevIdMenu === id ? '' : id;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!input) {
      alert('Enter');
      return;
    }

    const inputTrim = input.trimEnd();
    const normalizedInput = inputTrim.toUpperCase();

    const value = categoriesList.some(
      elem => elem.category.toUpperCase() === normalizedInput
    );

    value
      ? alert('Added')
      : transactionType === 'expensive'
      ? dispatch(
          addExpensiveCategory({
            category: inputTrim,
          })
        )
      : dispatch(
          addIncomeCategory({
            category: inputTrim,
          })
        );

    reset();
  };

  const removeCategory = id =>
    transactionType === 'expensive'
      ? dispatch(removeExpensiveCategory(id))
      : dispatch(removeIncomeCategory(id));
  return (
    <>
      <ul>
        {categoriesList.map(({ id, category }) => {
          return (
            <li key={id}>
              <button onClick={() => setCategory(category)}>{category}</button>
              <button onClick={() => handleOpenMenu(id)}>...</button>
              {idMenu === id && (
                <ul>
                  <li>
                    <button type="button">Edit</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => removeCategory(id)}>
                      Delete
                    </button>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New category"
          name="input"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </>
  );
};

Categories.propTypes = {
  transactionType: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Categories;

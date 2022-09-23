import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useState } from 'react';
import { CategoriesContext } from '../../context';

const Categories = ({ setCategory, transactionType }) => {
  const valueCategories = useContext(CategoriesContext);
  const { addCategory, deleteCategory, expensiveCategories, incomeCategories } =
    valueCategories;

  const categoriesList =
    transactionType === 'expensive' ? expensiveCategories : incomeCategories;

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
      : addCategory(
          {
            id: Date.now(),
            category: input,
          },
          transactionType
        );
    reset();
  };

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
                    <button
                      type="button"
                      onClick={() => deleteCategory(id, transactionType)}
                    >
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

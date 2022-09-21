import PropTypes from 'prop-types';
import { useState } from 'react';

const Categories = ({
  categoriesList,
  setCategory,
  deleteCategory,
  transactionType,
  addCategory,
}) => {
  // state = {
  //   input: '',
  //   idMenu: '',
  // };
  const [input, setInput] = useState('');
  const [idMenu, setIdMenu] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
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
    const normalizedInput = input.toUpperCase();
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
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  addCategory: PropTypes.func.isRequired,
  transactionType: PropTypes.string.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Categories;

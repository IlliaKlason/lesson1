import PropTypes from 'prop-types';
import Header from 'components/Header';

const Categories = ({ categoriesList, closeCategory }) => {
  return (
    <>
      <Header
        title="Categories"
        btnContent={'back'}
        closeCategory={closeCategory}
      />
      <ul>
        {categoriesList.map(({ id, category }) => {
          return (
            <li key={id}>
              <button>{category}</button>
              <button>...</button>
            </li>
          );
        })}
      </ul>
      <form>
        <input type="text" placeholder="New category" />
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
};

export default Categories;

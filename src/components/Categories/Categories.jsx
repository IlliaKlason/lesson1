import PropTypes from 'prop-types';
import { Component } from 'react';

class Categories extends Component {
  state = {
    input: '',
    idMenu: '',
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };
  reset = () => {
    this.setState({ input: '' });
  };
  handleOpenMenu = id => {
    this.setState(prevState => {
      return { idMenu: prevState.idMenu === id ? '' : id };
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { addCategory, transactionType } = this.props;
    addCategory(
      {
        id: Date.now(),
        category: this.state.input,
      },
      transactionType
    );
    this.reset();
  };

  render() {
    const { categoriesList, setCategory } = this.props;
    const { idMenu } = this.state;
    return (
      <>
        <ul>
          {categoriesList.map(({ id, category }) => {
            return (
              <li key={id}>
                <button onClick={() => setCategory(category)}>
                  {category}
                </button>
                <button onClick={() => this.handleOpenMenu(id)}>...</button>
                {idMenu === id && (
                  <ul>
                    <li>
                      <button>Edit</button>
                    </li>
                    <li>
                      <button>Delete</button>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New category"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">+</button>
        </form>
      </>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Categories;

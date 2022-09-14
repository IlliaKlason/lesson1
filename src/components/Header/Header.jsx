import PropTypes from 'prop-types';
const Header = ({ title, btnContent, closeCategory }) => {
  return (
    <header>
      {btnContent && (
        <button onClick={() => closeCategory()}>{btnContent}</button>
      )}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// sfc

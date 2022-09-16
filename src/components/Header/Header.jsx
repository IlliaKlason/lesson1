import { HeaderStyled, Button } from './Heder.styled';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';

console.log(sprite);
const Header = ({ title, btnContent, closeCategory }) => {
  return (
    <HeaderStyled>
      {closeCategory ? (
        <Button onClick={() => closeCategory()}>
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
        </Button>
      ) : null}
      <h1>{title}</h1>
    </HeaderStyled>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// sfc

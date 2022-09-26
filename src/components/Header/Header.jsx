import { HeaderStyled, Button, ButtonLink } from './Heder.styled';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';

const Header = ({ title, closeCategory, to }) => {
  return (
    <HeaderStyled>
      {closeCategory ? (
        <Button onClick={() => closeCategory()}>
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
        </Button>
      ) : to ? (
        <ButtonLink to={to}>
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
        </ButtonLink>
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

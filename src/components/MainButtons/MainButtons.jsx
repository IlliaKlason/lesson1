import { WrapperButton, Button } from './MainButtons.styled';

const MainButtons = ({ changePageHandler }) => {
  return (
    <WrapperButton>
      <Button to="/history/income" onClick={() => changePageHandler('income')}>
        Income
      </Button>
      <Button
        to="/history/expensive"
        onClick={() => changePageHandler('expensive')}
      >
        Expenses
      </Button>
    </WrapperButton>
  );
};

export default MainButtons;

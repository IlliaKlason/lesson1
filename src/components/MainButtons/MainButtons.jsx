import { WrapperButton, Button } from './MainButtons.styled';

const MainButtons = ({ changePageHandler }) => {
  return (
    <WrapperButton>
      <Button to="/history/income">Income</Button>
      <Button to="/history/expensive">Expenses</Button>
    </WrapperButton>
  );
};

export default MainButtons;

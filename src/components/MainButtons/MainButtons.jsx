import { WrapperButton, Button } from './MainButtons.styled';
const MainButtons = ({ changePageHandler }) => {
  return (
    <WrapperButton>
      <Button onClick={() => changePageHandler('income')}>Income</Button>
      <Button onClick={() => changePageHandler('expensive')}>Expenses</Button>
    </WrapperButton>
  );
};

export default MainButtons;

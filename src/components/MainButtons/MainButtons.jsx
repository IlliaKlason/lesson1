const MainButtons = ({ changePageHandler }) => {
  return (
    <div>
      <button onClick={() => changePageHandler('income')}>Income</button>
      <button onClick={() => changePageHandler('expensive')}>Expenses</button>
    </div>
  );
};

export default MainButtons;

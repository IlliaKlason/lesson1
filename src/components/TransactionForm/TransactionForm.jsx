import {
  Form,
  Label,
  InputTitle,
  Input,
  Submit,
} from './TransactionForm.styled';
// import { useContext } from 'react';
// import { TransactionContext } from '../../context';

import sprite from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
// import {
//   addExpensive,
//   addIncome,
// } from 'redux/transactions/transactionsActions';
import { useNavigate } from 'react-router-dom';
// import {
//   addExpensiveTransactionsAPI,
//   addIncomeTransactionsAPI,
// } from 'services/fireBaseAPI';
import {
  addExpensiveTransactions,
  addIncomeTransactions,
} from 'redux/transactions/transactionOperation';

const TransactionForm = ({ stateProps, handleChange, openCategory, reset }) => {
  const { date, time, category, summary, currency, comment, transactionType } =
    stateProps;

  const dispatch = useDispatch();
  const navigation = useNavigate();
  // const { addTransaction } = useContext(TransactionContext);
  const handleSubmit = e => {
    e.preventDefault();
    stateProps.id = Date.now();
    stateProps.transactionType === 'income' &&
      dispatch(addIncomeTransactions(stateProps));
    stateProps.transactionType === 'expensive' &&
      dispatch(addExpensiveTransactions(stateProps));

    // addTransaction(stateProps);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <span>Income</span>
        <input
          type="radio"
          name="transactionType"
          value="income"
          onChange={handleChange}
          checked={transactionType === 'income'}
        />
      </label>
      <label>
        <span>Expensive</span>
        <input
          type="radio"
          name="transactionType"
          value="expensive"
          onChange={handleChange}
          checked={transactionType === 'expensive'}
        />
      </label>
      <Label>
        <InputTitle>Date</InputTitle>
        <Input type="date" value={date} onChange={handleChange} name="date" />
      </Label>
      <Label>
        <InputTitle>Time</InputTitle>
        <Input type="time" value={time} name="time" onChange={handleChange} />
      </Label>
      <Label>
        <InputTitle>Category</InputTitle>
        <Input
          type="button"
          name="category"
          value={category}
          onClick={() => navigation('categories')}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <InputTitle>Summary</InputTitle>
        <Input
          type="text"
          name="summary"
          value={summary}
          placeholder="Summary"
          onChange={handleChange}
        />
      </Label>
      <Label>
        <InputTitle>Currency</InputTitle>
        <Input
          value={currency}
          type="button"
          name="currency"
          onChange={handleChange}
        />
      </Label>
      <Label>
        <InputTitle>Comment</InputTitle>
        <Input
          type="text"
          placeholder="Comment"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </Label>
      <Submit type="submit">
        <svg>
          <use href={sprite + '#icon-checkmark'}></use>
        </svg>
      </Submit>
    </Form>
  );
};

export default TransactionForm;

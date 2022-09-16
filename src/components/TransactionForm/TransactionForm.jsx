import {
  Form,
  Label,
  InputTitle,
  Input,
  Submit,
} from './TransactionForm.styled';

import sprite from '../../assets/icons/sprite.svg';

const TransactionForm = ({
  cbHandelSubmit,
  stateProps,
  handleChange,
  openCategory,
}) => {
  const { date, time, category, summary, currency, comment } = stateProps;
  const handleSubmit = e => {
    e.preventDefault();
    cbHandelSubmit(stateProps);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          onClick={() => openCategory()}
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

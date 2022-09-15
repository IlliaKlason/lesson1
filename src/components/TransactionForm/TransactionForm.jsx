const TransactionForm = ({
  cbHandelSubmit,
  stateProps,
  handleChange,
  openCategory,
}) => {
  // state = {
  //   date: '',
  //   time: '',
  //   category: 'food',
  //   same: '',
  //   currency: 'UAH',
  //   comment: '',
  // };
  // Записывает валью в стате
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  const { date, time, category, summary, currency, comment } = stateProps;
  const handleSubmit = e => {
    e.preventDefault();
    cbHandelSubmit(stateProps);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Date</p>
        <input type="date" value={date} onChange={handleChange} name="date" />
      </label>
      <label>
        <p>Time</p>
        <input type="time" value={time} name="time" onChange={handleChange} />
      </label>
      <label>
        <p>Category</p>
        <input
          type="button"
          name="category"
          value={category}
          onClick={() => openCategory()}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Summary</p>
        <input
          type="text"
          name="summary"
          value={summary}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Currency</p>
        <input
          value={currency}
          type="button"
          name="currency"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Comment"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default TransactionForm;

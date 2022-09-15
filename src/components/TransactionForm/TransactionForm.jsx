import { Component } from 'react';

class TransactionForm extends Component {
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

  render() {
    const { date, time, category, summary, currency, comment } =
      this.props.stateProps;
    const { handleChange, openCategory } = this.props;
    return (
      <form action="">
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
      </form>
    );
  }
}

export default TransactionForm;

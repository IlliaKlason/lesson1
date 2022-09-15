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
    const { date, time, category, same, currency, comment } = this.state;
    return (
      <form action="">
        <label>
          <p>Date</p>
          <input
            type="date"
            value={date}
            onChange={this.handleChange}
            name="date"
          />
        </label>
        <label>
          <p>Time</p>
          <input
            type="time"
            value={time}
            name="time"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Category</p>
          <input
            type="button"
            name="category"
            value={category}
            onClick={() => this.props.openCategory()}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Same</p>
          <input
            type="text"
            name="same"
            value={same}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Currency</p>
          <input
            value={currency}
            type="button"
            name="currency"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Comment"
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default TransactionForm;

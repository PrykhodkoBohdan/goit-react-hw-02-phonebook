import {Component} from 'react';
import css from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };


  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  // form.reset() 
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={css.container}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <p className={css.form__label}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              className={css.form__firstInput}
              value={name}
              onChange={this.handleInputChange}
              id={this.nameId}
              placeholder="Enter name"
              required
            ></input>
          </label>
          <label>
            <p className={css.form__label}>Number</p>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              maxLength="9"
              minLength="7"
              pattern="[0-9]{3}-{0,1}[0-9]{2}-{0,1}[0-9]{2}"
              required
              placeholder="123-45-67"
            ></input>
          </label>
          <button
            className={css.form__button}
            type="submit"
            disabled={name === '' || number === ''}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
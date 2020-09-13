import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';
import styles from './form.module.css';

export class Form1 extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newUser = { id: uuid(), name, number };

    const isName = this.props.contacts.find(contact => name === contact.name);
    if (isName) {
      this.props.setAlarm();
      this.setState(prev => ({
        name: '',
        number: '',
      }));
      return;
    }
    this.props.contactsAddAction(newUser);
    this.setState({
      name: '',
      number: '',
    });
  };

  handlerOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.list} onSubmit={this.handlerSubmit}>
          <label className={styles.listItemLable}>
            Name
            <input
              className={styles.listItem}
              type="text"
              name="name"
              value={name}
              onChange={this.handlerOnChange}
            />
          </label>
          <label className={styles.listItemLable}>
            Number
            <input
              className={styles.listItem}
              type="text"
              name="number"
              value={number}
              onChange={this.handlerOnChange}
            />
          </label>
          <button className={styles.btnSubmit} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Form1.propTypes = {
  contactsAddAction: PropTypes.func.isRequired,
  setAlarm: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

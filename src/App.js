import React, { Component } from "react";
import ContactsList from "./ContactsList/ContactsList";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Form1 } from "./Form/Form1";
import Filter from "./Filter/Filter";
import styles from "./app.module.css";
import slideTransition from "./transitions/slide.module.css";
// import alarmTransition from './transitions/apear.module.css';
import alarmTransition from "./transitions/slideright.module.css";

class App extends Component {
  state = {
    isShow: false,
    isAlarm: false,
  };

  componentDidMount() {
    this.setState({ isShow: true });
    // const prevContacts = localStorage.getItem('contacts');
    // if (prevContacts) {
    //   try {
    //     const contacts = JSON.parse(prevContacts);
    //     this.setState({ contacts });
    //   } catch (error) {
    //     console.error('Error = ', error);
    //   }
    // }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  setAlarm = () => {
    this.setState({ isAlarm: true });
  };
  hideAlarm = () => {
    this.setState({ isAlarm: false });
  };

  render() {
    const filter = this.props.filter;
    const contacts = this.props.contacts;
    // -= =-
    const { isShow, isAlarm } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
    return (
      <>
        <div className={styles.header}>
          <CSSTransition
            in={isShow}
            timeout={500}
            classNames={slideTransition}
            unmountOnExit
          >
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          <CSSTransition
            in={isAlarm}
            timeout={250}
            classNames={alarmTransition}
            unmountOnExit
          >
            <div onClick={this.hideAlarm} className={styles.alarm}>
              Contact already exist!
            </div>
          </CSSTransition>
        </div>
        <Form1 contacts={contacts} setAlarm={this.setAlarm} />
        <h2>Contacts</h2>
        <Filter filter={filter} contacts={contacts} />
        <ContactsList filteredContacts={filteredContacts} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(App);

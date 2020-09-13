import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import itemTransition from '../transitions/itemSlide.module.css';

function ContactsList({ filteredContacts, contactsDeleteAction }) {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filteredContacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={itemTransition}>
          <li className={styles.listItem}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={styles.btnDelete}
              type="button"
              data-id={contact.id}
              onClick={e => contactsDeleteAction(e.target.dataset.id)}>
              &#9587;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  contactsDeleteAction: PropTypes.func.isRequired,
};

export default ContactsList;

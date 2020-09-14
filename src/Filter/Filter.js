import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";
import { CSSTransition } from "react-transition-group";
import filterTransition from "../transitions/apear.module.css";
import { filterSetAction } from "../redux/phonebookAction";

function Filter({ filter, contacts }) {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={filterTransition}
      unmountOnExit
    >
      <div className={styles.filterBlock}>
        <label>
          Find contacts by name
          <input
            className={styles.filterInput}
            type="text"
            name="filter"
            value={filter}
            onChange={(e) => filterSetAction(e.target.value)}
          />
        </label>
      </div>
    </CSSTransition>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};
export default Filter;

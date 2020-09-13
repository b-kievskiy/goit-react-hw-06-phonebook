import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterSetAction, contactsAddAction, contactsDeleteAction } from './phonebookAction';

// const initialState = [];

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//       case contactsAddAction.type:
//       return [...state, payload];
//       case contactsDeleteAction.type:
//       return [...state.filter(contact => contact.id !== payload)];
//     default:
//       return state;
//   }
// };

const addContacts = (state, action) => [...state, action.payload];
const deleteContacts = (state, action) => [...state.filter(contact => contact.id !== action.payload)];

const contactsReducer = createReducer([], { 
  [contactsAddAction]: addContacts,
  [contactsDeleteAction]: deleteContacts,
 });

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//       case filterSetAction.type:
//       return payload;
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer('', { 
  [filterSetAction]: (state, action) => action.payload,
 });

// export { contactsReducer, filterReducer };
export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
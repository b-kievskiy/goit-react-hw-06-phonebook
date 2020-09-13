// import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import combineReducers from './phonebookReducer';
// import { contactsReducer, filterReducer } from './phonebookReducer';

const persistConfig = {
  // key: 'root',
  key: 'phonebook',
  storage,
};

const rootReducer = combineReducers;
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, devToolsEnhancer());

// --== ! ==--
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware ( { 
    serializableCheck : false})
});

export const persistor = persistStore(store);

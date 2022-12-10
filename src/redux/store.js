import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';
import { persistedContactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: '',
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

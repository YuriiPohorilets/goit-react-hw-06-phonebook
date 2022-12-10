import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';

const initialState = {
  list: initialContacts,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },

      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;

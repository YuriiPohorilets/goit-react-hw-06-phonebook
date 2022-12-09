import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';

const initialState = {
  contacts: initialContacts,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(contact => contact.name === action.payload.name)) {
          console.log('Oops!');
        }

        return [action, ...state];
      },

      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            number: '123',
          },
        };
      },
    },

    deleteContact: (state, action) => {
      console.log(2);
      state.contacts.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;

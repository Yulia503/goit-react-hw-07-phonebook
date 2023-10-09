import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateContact = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContact,

  reducers: {

//*---------------додавання контакта---------------------------

    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },

      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },

//*---------------видалення контакта------------------------
    
  
    deleteContact: {
      reducer(state, action) {
        return {
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },

      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const reduceContact = contactsSlice.reducer;

const persistRoot = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistRoot, reduceContact);

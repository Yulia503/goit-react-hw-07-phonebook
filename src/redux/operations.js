import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//*--------бекенд 

axios.defaults.baseURL = 'https://65245876ea560a22a4e9c608.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

//*----------дод.контакт

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


//*----------delete--------


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

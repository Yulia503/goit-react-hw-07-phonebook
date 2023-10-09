import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

export const setFilter = createAction('filter/setFilter', contactNewName => {
  return {
    payload: contactNewName,
  };
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  });
});

//*-- повертаємо імя за пошуком-----
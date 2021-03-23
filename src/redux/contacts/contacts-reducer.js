import * as types from './contacts-types';

const innitialItems = [];

const itemsReducers = (state = innitialItems, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

const reducers = { itemsReducers, filterReducer };

export default reducers;

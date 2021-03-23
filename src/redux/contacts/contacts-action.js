import * as types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => {
  return { type: types.ADD, payload: { id: uuidv4(), name, number } };
};

const deleteContact = id => {
  return { type: types.DELETE, payload: id };
};

const filterContacts = text => {
  return { type: types.FILTER, payload: text };
};

export { addContact, deleteContact, filterContacts };

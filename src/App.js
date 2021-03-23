import { Component } from 'react';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, _) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <div className={s.container}>
          <h2 className={s.contacts__title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);

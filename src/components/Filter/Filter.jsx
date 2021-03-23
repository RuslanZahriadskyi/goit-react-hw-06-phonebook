import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as contactsAction from '../../redux/contacts/contacts-action';
import { connect } from 'react-redux';

class Filter extends Component {
  handlerFilter = e => {
    const { value } = e.currentTarget;
    const { findByFilter } = this.props;
    findByFilter(value);
  };
  render() {
    const { filterValue } = this.props;
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={this.handlerFilter}
        ></input>
      </>
    );
  }
}

const mapStateToProps = state => ({ filterValue: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  findByFilter: text => dispatch(contactsAction.filterContacts(text)),
});

Filter.propTypes = {
  findByFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

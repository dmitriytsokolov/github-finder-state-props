import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    search: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.search === '') {
      this.props.setAlert({ msg: 'Please enter something', type: 'light' });
      setTimeout(() => {
        this.props.setAlert(null);
      }, 5000);
    } else {
      this.props.searchUsers(this.state.search);
      this.setState({ search: '' });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;

    return (
      <div>
        <form onChange={this.onChange} onSubmit={this.onSubmit}>
          <input type='text' name='search' placeholder='Search Users...' />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button onClick={clearUsers} className='btn btn-light btn-block'>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;

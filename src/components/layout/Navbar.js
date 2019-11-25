import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ navBarClass, iconClass, title }) => {
  return (
    <nav className={navBarClass}>
      <h1>
        <i className={iconClass}> {title}</i>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  navBarClass: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  navBarClass: 'navbar bg-primary',
  iconClass: 'fab fa-github',
  title: ' Github Finder'
};
export default Navbar;

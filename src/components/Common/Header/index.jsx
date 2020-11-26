import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../services/routes';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to={routes.root.path} className="nav-link">Home</Link>{' '}
      <Link to={routes.newUser.path} className="nav-link">New user</Link>
    </nav>
  );
};

export default Header;

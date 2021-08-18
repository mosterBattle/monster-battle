import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <div className="align-items-right">
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
            </button>
        </div>
  );
};

export default Header;

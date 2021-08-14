import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <div className="">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div className="mainBody">
              <h1>Monster Battle</h1>
              <div className="mainOptions">
              <Link className="mainBtn" to="/login">
                Login
              </Link>
              <Link className="mainBtn" to="/signup">
                Signup
              </Link>
              </div>
            </div>
          )}
        </div>
  );
};

export default Header;

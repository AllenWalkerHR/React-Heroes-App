import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogOut = () => {
    history.replace('/login');
    dispatch({ type: types.logout, payload: {} });
  };

  return (
    <div>
      <nav className='uk-navbar-container' uk-navbar=''>
        <div className='uk-navbar-left  uk-hidden@m'>
          <a className='uk-navbar-toggle' uk-toggle='target: #my-id' href='#!'>
            <span uk-icon='icon: menu'></span>
            <span>menu</span>
          </a>
        </div>
        <div className='uk-navbar-center'>
          <ul className='uk-navbar-nav  uk-visible@m'>
            <li>
              <NavLink activeClassName='uk-text-emphasis' to='/marvel'>
                Marvel
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='uk-text-emphasis' to='/dc'>
                DC
              </NavLink>
            </li>
          </ul>
          <div className='uk-navbar-item '>
            <Link className='uk-logo' to='/'>
              Heroes App
            </Link>
          </div>
          <ul className='uk-navbar-nav  uk-visible@m'>
            <li>
              <NavLink activeClassName='uk-text-emphasis' to='/search'>
                Search
              </NavLink>
            </li>
            <li>
              <a href='#!' onClick={handleLogOut}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
        <div className='uk-navbar-right'>
          <div className='uk-navbar-item uk-text-primary'>{user.name}</div>
        </div>
      </nav>

      {/* This is the off-canvas */}
      <div id='my-id' uk-offcanvas=''>
        <div className='uk-offcanvas-bar uk-flex uk-flex-column'>
          <button
            className='uk-offcanvas-close'
            type='button'
            uk-close=''></button>
          <ul className='uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical'>
            <li className='uk-nav-header'>
              <NavLink to='/'>Heroes App</NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='uk-text-emphasis'
                to='/marvel'
                uk-toggle='target: #my-id'>
                <small>Marvel</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='uk-text-emphasis'
                to='/dc'
                uk-toggle='target: #my-id'>
                <small>DC</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='uk-text-emphasis'
                to='/search'
                uk-togle='target: #my-id'>
                <small>Search</small>
              </NavLink>
            </li>
            <li>
              <a href='#!' onClick={handleLogOut} uk-toggle='target: #my-id'>
                <small>Log Out</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

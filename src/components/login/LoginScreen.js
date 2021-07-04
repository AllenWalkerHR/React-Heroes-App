import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    // console.log('click');
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({ type: types.login, payload: { name: 'Carlos' } });
    history.replace(lastPath);
  };
  return (
    <div
      className='uk-flex uk-flex-column uk-flex-center uk-flex-middle'
      uk-height-viewport='min-height: 100'>
      <h1>Login Screen</h1>
      <button className='uk-button uk-button-primary' onClick={handleClick}>
        LogIn
      </button>
    </div>
  );
};

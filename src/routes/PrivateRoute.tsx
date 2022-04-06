import React from 'react';
import {
  Navigate,
} from 'react-router-dom';

/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */

const PrivateRoute = (props: { children: React.ReactNode }): JSX.Element => {
  const isLoggedIn = localStorage.getItem('token');
  const { children } = props;
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      to="/login"
    />
  );
};

export default PrivateRoute;

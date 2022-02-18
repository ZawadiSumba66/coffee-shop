import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
/* eslint-disable react/jsx-filename-extension */

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

function App() {
  return (
    <Router>
      <RouterPage path="signup" pageComponent={<SignUp />} />
      <RouterPage path="/login" pageComponent={<Login />} />
    </Router>
  );
}

export default App;

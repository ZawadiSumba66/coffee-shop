import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import HomePage from './containers/HomePage/HomePage';
import Dashboard from './containers/Dashboard/Dashboard';
/* eslint-disable react/jsx-filename-extension */

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

function App() {
  return (
    <Router>
      <RouterPage path="signup" pageComponent={<SignUp />} />
      <RouterPage path="/login" pageComponent={<Login />} />
      <RouterPage path="/" pageComponent={<HomePage />} />
      <RouterPage path="/dashboard" pageComponent={<Dashboard />} />
    </Router>
  );
}

export default App;

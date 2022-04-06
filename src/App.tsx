import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/user/SignUp/SignUp';
import Login from './components/user/Login/Login';
import HomePage from './containers/HomePage/HomePage';
import Dashboard from './containers/Dashboard/Dashboard';
import UserSettings from './components/user/Settings/UserSettings';
import CustomizeCoffee from './components/coffee/CustomizeCoffee';
import Checkout from './components/payment/Checkout';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './routes/NotFound';

/* eslint-disable react/function-component-definition */

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<PrivateRoute><UserSettings /></PrivateRoute>} />
    <Route path="/coffee/:id" element={<PrivateRoute><CustomizeCoffee /></PrivateRoute>} />
    <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

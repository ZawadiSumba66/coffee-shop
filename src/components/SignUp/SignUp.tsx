import React from 'react';
import TextField from '@mui/material/TextField';
import './SignUp.css';
import { Link } from '@reach/router';
import Logo from '../../containers/Logo';

/* eslint-disable react/jsx-filename-extension */
function SignUp() {
  return (
    <div className="signup-form backdrop-blur-sm">
      <div className="flex-1 justify-center pl-40 pt-40">
        <Logo />
        <div>
          <TextField
            id="standard-basic"
            label="first name"
            variant="standard"
            required
            type="text"
            className="input-field w-80"
          />
          <TextField
            id="standard-basic"
            label="last name"
            variant="standard"
            required
            type="text"
            className="input-field w-80"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            required
            type="email"
            className="input-field w-80"
          />
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            required
            type="password"
            className="input-field w-80"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="confirm password"
            variant="standard"
            required
            type="password"
            className="input-field w-80"
          />
        </div>
        <button type="submit" className="bg-amber-700 rounded-b-lg p-3 w-80 mt-10 font-bold text-white">
          SIGN UP
        </button>
        <div className="d-flex">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="underline text-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

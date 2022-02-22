import React from 'react';
import TextField from '@mui/material/TextField';
import '../SignUp/SignUp.css';
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
            label="email"
            variant="standard"
            required
            type="email"
            className="input-field w-80"
          />
          <br />
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            required
            type="password"
            className="input-field w-80"
          />
        </div>
        <button type="submit" className="bg-amber-700 rounded-b-lg p-3 w-80 mt-10 font-bold text-white">
          LOGIN
        </button>
        <div className="d-flex">
          <span>Dont have an account? </span>
          <Link
            to="/signup"
            className="underline text-blue-600"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

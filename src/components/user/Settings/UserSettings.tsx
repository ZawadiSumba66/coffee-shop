import React from 'react';
import { TextField } from '@mui/material';
import '../User.css';
import AvatarFile from './Avatar';
import Footer from '../../../containers/Footer';
import Header from '../../../containers/Header';

/* eslint-disable react/jsx-filename-extension */
function UserSettings() {
  return (
    <div>
      <div className="signup-form h-auto pb-20 px-10 pt-10">
        <Header />
        <div className="pl-20 pt-20 flex">
          <div>
            <h2 className="font-bold pt-10">Edit and save your information below.</h2>
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
              UPDATE
            </button>
          </div>
          <div>
            <AvatarFile />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserSettings;

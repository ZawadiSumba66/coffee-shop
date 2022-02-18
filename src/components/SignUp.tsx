import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

/* eslint-disable react/jsx-filename-extension */
function SignUp() {
  return (
    <div className="mx-auto">
      <FormControl>
        <TextField
          id="standard-basic"
          label="first name"
          variant="standard"
          required
          type="text"
          className="text-xs"
        />
        <TextField
          id="standard-basic"
          label="last name"
          variant="standard"
          required
          type="text"
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          required
          type="email"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          required
          type="password"
        />
        <TextField
          id="standard-basic"
          label="confirm Password"
          variant="standard"
          required
          type="password"
        />
      </FormControl>
      <p className="font-weight-bold text-white">text world</p>
    </div>
  );
}

export default SignUp;

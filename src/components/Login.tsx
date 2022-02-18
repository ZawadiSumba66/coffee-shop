import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

/* eslint-disable react/jsx-filename-extension */
function Login() {
  return (
    <div className="bg-black">
      <FormControl>
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
      </FormControl>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import '../User.css';
import { Link } from '@reach/router';
import Logo from '../../../containers/Logo';
import store from '../../../redux/store';
import { createUser } from '../../../redux/slices/user.slice';

type SignupProps = {
  errors: [];
};

function SignUp({ errors }: SignupProps) {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('SIGN UP');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (errors !== null) {
      setStatus('SIGN UP');
    } else {
      setStatus('Signing up...');
    }
    e.preventDefault();
    store.dispatch(createUser(values));
  };

  return (
    <div className="signup-form backdrop-blur-sm">
      <div className="pl-40 pt-40">
        <Logo />
        <div className="errors">
          {errors ? (
            <div>
              {errors.map((item: string) => (
                <li className="text-danger" key={Date.now() * Math.random()}>{item}</li>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="first name"
              variant="standard"
              required
              type="text"
              className="w-80"
              value={values.firstname}
              onChange={handleInputChange}
              name="firstname"
            />
            <TextField
              id="standard-basic"
              label="last name"
              variant="standard"
              required
              type="text"
              className="w-80 ml-3"
              value={values.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="email"
              variant="standard"
              required
              type="email"
              className="mt-2 w-80"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
            <TextField
              id="standard-basic"
              label="password"
              variant="standard"
              required
              type="password"
              className="ml-3 mt-2 w-80"
              value={values.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="confirm password"
              variant="standard"
              required
              type="password"
              className="mt-2 w-80"
              value={values.password_confirmation}
              onChange={handleInputChange}
              name="password_confirmation"
            />
          </div>
          <button type="submit" className="bg-amber-700 rounded-b-lg p-3 w-80 mt-10 font-bold text-white">
            {status}
          </button>
        </form>
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

type SignupState = {
  user: {
    error: [],
  }
};

const mapStateToProps = (state: SignupState) => ({
  errors: state.user.error,
});

export default connect(mapStateToProps)(SignUp);

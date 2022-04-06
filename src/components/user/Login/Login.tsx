import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import '../User.css';
import { Link } from 'react-router-dom';
import Logo from '../../../containers/Logo';
import store from '../../../redux/store';
import { loginUser } from '../../../redux/slices/user.slice';

type LoginProps = {
  errors: string;
};
function Login({ errors }: LoginProps) {
  const initialValues = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('LOGIN');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors) {
      setStatus('Logging in...');
    }
    store.dispatch(loginUser(values));
  };

  return (
    <div className="signup-form backdrop-blur-sm">
      <div className="flex-1 justify-center pl-40 pt-40">
        <Logo />
        <p className="text-sm text-red-500 font-semibold">{errors}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="email"
              variant="standard"
              required
              type="email"
              className="w-80"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
            <br />
            <TextField
              id="standard-basic"
              label="password"
              variant="standard"
              required
              type="password"
              className="mt-3 w-80"
              value={values.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <button type="submit" className="bg-amber-700 rounded-b-lg p-3 w-80 mt-10 font-bold text-white">
            {status}
          </button>
        </form>
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

type LoginState = {
  user: {
    login_error: string,
  }
};

const mapStateToProps = (state: LoginState) => ({
  errors: state.user.login_error,
});

export default connect(mapStateToProps)(Login);

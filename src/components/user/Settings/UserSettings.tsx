import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import store from '../../../redux/store';
import '../User.css';
import AvatarFile from './Avatar';
import Footer from '../../../containers/Footer';
import Header from '../../../containers/Header';
import { fetchUser, updateUser, UserData } from '../../../redux/slices/user.slice';

type UserProps = {
  user: UserData
};

function UserSettings({ user }: UserProps) {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('Update');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    setValues(user);
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdate = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setStatus('Saving...');
    store.dispatch(updateUser(values)).then(() => {
      setStatus('Saved!');
      setTimeout(() => {
        setStatus('Update');
      }, 2000);
    });
  };

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner__wrapper">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <div className="signup-form h-auto pb-20 px-10 pt-10">
        <Header />
        <div className="pl-20 pt-20 flex justify-between">
          <div>
            <h2 className="font-bold pt-10 mb-3">Edit and save your information below.</h2>
            <form onSubmit={handleUpdate}>
              <div>
                <input
                  type="text"
                  className="form-control w-80 mb-3"
                  defaultValue={user.firstname}
                  name="firstname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control w-80 mb-3"
                  defaultValue={user.lastname}
                  name="lastname"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control w-80 mb-3"
                  defaultValue={user.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  className="form-control w-80"
                  defaultValue={user.password}
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="bg-amber-700 rounded-b-lg p-3 w-80 mt-10 font-bold text-white">
                {status}
              </button>
            </form>
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

type UserState = {
  user: {
    user: UserData
  }
};

const mapStateToProps = (state: UserState) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(UserSettings);

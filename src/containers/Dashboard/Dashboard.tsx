import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import Coffees from './Coffees';
import { UserData, fetchUser } from '../../redux/slices/user.slice';
import './Dashboard.css';
import store from '../../redux/store';

type DashboardProps = {
  user: UserData
};

function Dashboard({ user }: DashboardProps) {
  const token = localStorage.getItem('token');
  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);

  if (user.firstname === undefined) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner__wrapper">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="h-auto">
      <div className="bg-gradient-to-r from-black bg-amber-700 p-4 h-46 text-white">
        <Header />
        <h1 className="text-2xl font-bold pt-3 pl-10">
          Hey there,
          {' '}
          <span>{`${token ? user.firstname : 'Customer'}`}</span>
        </h1>
        <span className="text-sm italic pl-10">Let us spice up your day with some great coffee, shall we?</span>
      </div>
      <div className="coffee-background">
        <Coffees />
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

export default connect(mapStateToProps)(Dashboard);

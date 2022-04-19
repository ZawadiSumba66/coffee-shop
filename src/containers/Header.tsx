import React, { useEffect } from 'react';
import { Avatar } from '@mui/material';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import store from '../redux/store';
import { fetchAvatar } from '../redux/slices/avatar.slice';

type HeaderProps = {
  avatar: string
};

function Header({ avatar }: HeaderProps) {
  useEffect(() => {
    store.dispatch(fetchAvatar());
  }, []);

  const logOut = () => localStorage.clear();
  return (
    <div className="flex justify-between">
      <Logo />
      <Dropdown>
        <Dropdown.Toggle className="flex items-center bg-gray-700 hover:bg-gray-600 focus:bg-gray-500 border-gray-700">
          <Avatar src={avatar} className="cursor-pointer mr-3" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/dashboard" className="hover:no-underline">Dashboard</Link></Dropdown.Item>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/orders" className="hover:no-underline">My Orders</Link></Dropdown.Item>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/settings" className="hover:no-underline">Settings</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="active:bg-gray-300"><Link to="/login" onClick={logOut} className="hover:no-underline">Log Out</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

type AvatarState = {
  avatar: {
    avatar: string,
  }
};

const mapStateToProps = (state: AvatarState) => ({
  avatar: state.avatar.avatar,
});

export default connect(mapStateToProps)(Header);

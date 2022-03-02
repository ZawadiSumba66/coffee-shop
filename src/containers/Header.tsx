import React from 'react';
import { Avatar } from '@mui/material';
import { Dropdown } from 'react-bootstrap';
import { Link } from '@reach/router';
import Logo from './Logo';

/* eslint-disable react/jsx-filename-extension */
function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <Dropdown>
        <Dropdown.Toggle className="flex items-center bg-gray-700 hover:bg-gray-600 focus:bg-gray-500 border-gray-700">
          <Avatar src="/broken-image.jpg" className="cursor-pointer mr-3" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/dashboard" className="hover:no-underline">Dashboard</Link></Dropdown.Item>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/favorites" className="hover:no-underline">My favorites</Link></Dropdown.Item>
          <Dropdown.Item className="active:bg-gray-300"><Link to="/settings" className="hover:no-underline">Settings</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="active:bg-gray-300"><Link to="/login" className="hover:no-underline">Log Out</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Header;

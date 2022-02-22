import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../Logo';
/* eslint-disable react/jsx-filename-extension */

function Footer() {
  return (
    <div>
      <div className="h-70 bg-gray-900 p-3 text-white">
        <Logo />
        <div className="flex justify-between mx-auto w-50">
          <div>
            <p className="border-b-2 mb-2">Company</p>
            <p>Website</p>
            <p>Careers</p>
            <p>Staff</p>
            <p>Mission</p>
          </div>
          <div>
            <p className="border-b-2 mb-2">Services</p>
            <p>Delivery</p>
            <p>Tendering</p>
            <p>Merchandise</p>
            <p>Customization</p>
          </div>
          <div>
            <p className="border-b-2 mb-2">Contact Us</p>
            <p>P.O BOX  - 01001</p>
            <p>Nairobi, Kenya</p>
            <p>Loita Street</p>
            <p>+25474569023</p>
          </div>
        </div>
        <div className="flex justify-center mt-3 text-2xl">
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram-square" />
          <i className="fab fa-facebook" />
          <FontAwesomeIcon icon="instagram" className="text-4xl pr-2" />
        </div>
        <span className="flex justify-center my-2 text-amber-700">&copy; Flavored Cafe 2022. All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;

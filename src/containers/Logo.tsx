import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable react/jsx-filename-extension */
function Logo() {
  return (
    <div>
      <span className="font-bold pr-2 text-2xl cursor-pointer text-amber-700 logo">Flavored Cafe</span>
      <FontAwesomeIcon icon={faMugHot} className="text-2xl" />
      <p className="text-sm">Wake up to something special.</p>
    </div>
  );
}

export default Logo;

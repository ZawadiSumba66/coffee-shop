import React from 'react';
import { useParams } from '@reach/router';
import Header from '../../containers/Header';

/* eslint-disable react/jsx-filename-extension */
function CustomizeCoffee() {
  const { name, image } = useParams();
  return (
    <div>
      <Header />
      <p>{name}</p>
      <img alt={name} src={image} />
    </div>
  );
}

export default CustomizeCoffee;

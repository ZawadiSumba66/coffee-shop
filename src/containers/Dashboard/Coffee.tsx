import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import React from 'react';
import { Espresso, Latte, Popular } from './CoffeeData';

/* eslint-disable react/jsx-filename-extension */
function Coffee() {
  return (
    <div className="mx-5 py-4">
      <h2 className="font-bold text-2xl pb-3 underline">Popular</h2>
      <div className="grid grid-cols-4 gap-4">
        {Popular.map((coffee) => (
          <div key={coffee.id}>
            <div className="rounded-xl shadow-2xl bg-gray-200 w-50">
              <Link to={`/coffee/${coffee.name}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={coffee.image} alt={coffee.name} className=" h-24 w-100" />
              </Link>
              <div className="flex justify-between">
                <p className="text-gray-900 text-sm pl-3 pb-2 pt-1 font-bold">{coffee.name}</p>
                <FontAwesomeIcon icon={faHeart} className="text-lg pr-2 pt-2 text-slate-400 border-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-2xl pb-3 mt-3 underline">Latte</h2>
      <div className="grid grid-cols-4 gap-4">
        {Latte.map((coffee) => (
          <div key={coffee.id}>
            <div className="rounded-xl shadow-2xl bg-gray-200 w-50">
              <Link to={`/coffee/${coffee.name}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={coffee.image} alt={coffee.name} className=" h-24 w-100" />
              </Link>
              <div className="flex justify-between">
                <p className="text-gray-900 text-sm pl-3 pb-2 pt-1 font-bold">{coffee.name}</p>
                <FontAwesomeIcon icon={faHeart} className="text-lg pr-2 pt-2 text-slate-400 border-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-2xl pb-3 mt-3 underline">Espresso</h2>
      <div className="grid grid-cols-4 gap-4">
        {Espresso.map((coffee) => (
          <div key={coffee.id}>
            <div className="rounded-xl shadow-2xl bg-gray-200 w-50">
              <Link to={`/coffee/${coffee.name}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={coffee.image} alt={coffee.name} className=" h-24 w-100" />
              </Link>
              <div className="flex justify-between">
                <p className="text-gray-900 text-sm pl-3 pb-2 pt-1 font-bold">{coffee.name}</p>
                <FontAwesomeIcon icon={faHeart} className="text-lg pr-2 pt-2 text-slate-400 border-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffee;

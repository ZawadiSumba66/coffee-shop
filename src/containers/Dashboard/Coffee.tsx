import React from 'react';
import { Link } from '@reach/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CoffeeProps = {
  coffee: {
    id: number
    image: string
    name: string
  }
};

function Coffee({ coffee }: CoffeeProps) {
  return (
    <div>
      <div className="rounded-xl shadow-2xl bg-gray-200 h-48">
        <Link to={`/coffee/${coffee.id}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={coffee.image} alt={coffee.name} className=" h-40 w-100" />
        </Link>
        <div className="flex justify-between">
          <p className="text-gray-900 text-sm pl-3 pb-2 pt-1 font-bold">{coffee.name}</p>
          <FontAwesomeIcon icon={faHeart} className="text-lg pr-2 pt-2 text-slate-400 border-black" />
        </div>
      </div>
    </div>
  );
}

export default Coffee;

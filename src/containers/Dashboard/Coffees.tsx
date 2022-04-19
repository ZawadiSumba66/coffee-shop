import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { CoffeeData, getCoffeePosts } from '../../redux/slices/categories.slice';
import Coffee from './Coffee';

type CoffeesProps = {
  latte: [],
  espresso: [],
  popular: []
};

function Coffees({ latte, espresso, popular }: CoffeesProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoffeePosts());
  }, []);

  return (
    <div className="mx-5 py-4">
      <h2 className="font-bold text-2xl pb-3 underline">Popular</h2>
      <div className="grid grid-cols-4 gap-4">
        {popular.map((coffee: CoffeeData) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <h2 className="font-bold text-2xl pb-3 mt-3 underline">Latte</h2>
      <div className="grid grid-cols-4 gap-4">
        {latte.map((coffee: CoffeeData) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <h2 className="font-bold text-2xl pb-3 mt-3 underline">Espresso</h2>
      <div className="grid grid-cols-4 gap-4">
        {espresso.map((coffee: CoffeeData) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

type CoffeeState = {
  data: {
    popular: [],
    latte: [],
    espresso: []
  }
};

const mapStateToProps = (state: CoffeeState) => ({
  popular: state.data.popular,
  latte: state.data.latte,
  espresso: state.data.espresso,
});

export default connect(mapStateToProps)(Coffees);

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Header from '../../containers/Header';
import { getCoffeePost } from '../../redux/slices/coffeedata.slice';
import './coffee.css';
import Footer from '../../containers/Footer';

/* eslint-disable react/jsx-filename-extension */

type CoffeeProps = {
  post: { name: '', image: '' }
};

function CustomizeCoffee({ post }: CoffeeProps) {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoffeePost(id));
  }, []);

  return (
    <div>
      <div className="mx-10 mt-10">
        <Header />
      </div>
      <div className="flex mt-20 mb-3">
        <div className="mx-20">
          <img src={post.image} alt={post.name} className="drop-shadow-2xl coffee-image rounded-2xl" />
          <p className="font-bold text-lg pl-10 mt-2">{post.name}</p>
        </div>
        <div>
          <div className="flex mt-10">
            <span className="font-bold pr-5">Size:</span>
            <div>
              <FontAwesomeIcon icon={faMugHot} className="text-2xl pr-5 text-gray-300" />
              <p className="text-xs">small</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMugHot} className="text-4xl pr-5 text-gray-300" />
              <p className="text-xs">medium</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMugHot} className="text-5xl pr-2 text-gray-300" />
              <p className="text-xs">large</p>
            </div>
          </div>
          <div className="flex mt-3">
            <span className="font-bold pr-5">Milk:</span>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Normal</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Soya Milk</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Oat Milk</button>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="font-bold pr-3">Topping:</span>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Almond</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Caramel</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Chocolate</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Mint</button>
            </div>
            <div>
              <button type="button" className="bg-gray-300 text-black border-none px-2 py-1 mr-2 rounded-lg">Vodka</button>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="font-bold pr-3">Price:</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

type PostState = {
  data: {
    post: { name: '', image: '' }
  }
};

const mapStateToProps = (state: PostState) => ({
  post: state.data.post,
});

export default connect(mapStateToProps)(CustomizeCoffee);

import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../../containers/Header';
import { getCoffeePost } from '../../redux/slices/categories.slice';
import './coffee.css';
import '../../containers/Dashboard/Dashboard.css';
import Footer from '../../containers/Footer';
import { Milk, Size, Topping } from './parameter';
import Flash from './Flash';
import Checkout from '../payment/Checkout';

/* eslint-disable no-unneeded-ternary */

type CoffeeProps = {
  post: { name: '', image: '', price: number },
};

const size: Size[] = [
  { measure: 'text-2xl', description: 'small' },
  { measure: 'text-4xl', description: 'medium' },
  { measure: 'text-5xl', description: 'large' },
];

const milk: Milk[] = [
  { type: 'Normal' },
  { type: 'Soya Milk' },
  { type: 'Oat Milk' },
];

const topping: Topping[] = [
  { type: 'Almond' },
  { type: 'Caramel' },
  { type: 'Chocolate' },
  { type: 'Mint' },
  { type: 'Vodka' },
];

function CustomizeCoffee({ post }: CoffeeProps) {
  const [selectedSize, setSelectedSize] = useState<Size>();
  const [selectedMilk, setSelectedMilk] = useState<Milk>();
  const [selectedTopping, setSelectedTopping] = useState<Topping>();
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  let { id }: any = useParams();
  id = parseInt(id, 10);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoffeePost(id));
  }, []);

  const parameters = {
    name: post.name,
    image: post.image,
    size: selectedSize?.description,
    milk: selectedMilk?.type,
    topping: selectedTopping?.type,
    price: selectedPrice,
  };
  const toggleModal = (toggle: boolean, e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    console.log(parameters);
    setSelectedMilk(undefined);
    setSelectedTopping(undefined);
    setSelectedSize(undefined);
    setShowModal(toggle);
  };

  const handlePrice = (option: Size) => {
    setSelectedSize(option);
    switch (option.description) {
      case 'small':
        return setSelectedPrice(post.price + 15);
      case 'medium':
        return setSelectedPrice(post.price + 20);
      case 'large':
        return setSelectedPrice(post.price + 25);
      default:
        return selectedPrice;
    }
  };
  return (
    <div>
      <div className="mx-10 mt-10">
        <Header />
      </div>
      <Flash />
      <h4 className="font-semibold mt-10 mb-3 ml-20">For you to continue with the purchase, kindly select atleast the size option.</h4>
      <div className="flex mb-3">
        <div className="mx-20">
          <img src={post.image} alt={post.name} className="drop-shadow-2xl coffee-image rounded-2xl" />
          <p className="font-bold text-lg pl-10 mt-2">{post.name}</p>
        </div>
        <div>
          <div className="flex">
            <span className="font-bold pr-5">Size:</span>
            <div className="flex">
              {size.map((option) => (
                <div key={option.description}>
                  <FontAwesomeIcon
                    icon={faMugHot}
                    className={`${option.measure} cursor-pointer pr-5 text-gray-300 ${selectedSize?.description === option.description ? 'text-black' : undefined}`}
                    onClick={() => handlePrice(option)}
                  />
                  <p className="text-xs font-semibold">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-3">
            <span className="font-bold pr-5">Milk:</span>
            <div className="flex">
              {milk.map((option) => (
                <button
                  key={option.type}
                  type="button"
                  className={`bg-gray-300 text-black font-semibold border-none px-2 py-1 mr-2 rounded-lg ${selectedMilk?.type === option.type ? 'bg-black text-white' : undefined}`}
                  onClick={() => setSelectedMilk(option)}
                >
                  {option.type}
                </button>
              ))}
            </div>
          </div>
          <div className="flex mt-4">
            <span className="font-bold pr-3">Topping:</span>
            <div className="flex">
              {topping.map((option) => (
                <button
                  key={option.type}
                  type="button"
                  className={`bg-gray-300 font-semibold text-black border-none px-2 py-1 mr-2 rounded-lg ${selectedTopping?.type === option.type ? 'bg-black text-white' : undefined}`}
                  onClick={() => setSelectedTopping(option)}
                >
                  {option.type}
                </button>
              ))}
            </div>
          </div>
          <div className="flex mt-3">
            <span className="font-bold pr-3">Total Price:</span>
            <span className="font-semibold">
              KES
              {' '}
              {selectedPrice.toFixed(2)}
            </span>
          </div>
          <button type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleModal(true, e)} disabled={selectedSize ? false : true} className={`border-none px-2 py-1 font-bold text-white rounded-lg mt-5 ${selectedSize ? 'bg-amber-700' : 'bg-gray-300'} `}>CHECKOUT</button>
        </div>
      </div>
      <Link to="/dashboard">
        <div className="flex items-center cursor cursor-pointer my-1 mr-2 justify-end">
          <FontAwesomeIcon icon={faAngleLeft} className="text-2xl pr-1" />
          <span>Back to menu</span>
        </div>
      </Link>
      <Footer />
      <Checkout
        price={selectedPrice}
        post={post}
        show={showModal}
        onHide={(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleModal(false, e)}
      />
    </div>
  );
}

type PostState = {
  data: {
    post: { name: '', image: '', price: number }
  },
};

const mapStateToProps = (state: PostState) => ({
  post: state.data.post,
});

export default connect(mapStateToProps)(CustomizeCoffee);

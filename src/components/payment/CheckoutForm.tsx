import React, { useState } from 'react';
import '../../containers/Dashboard/Dashboard.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

type FormProps = {
  price: number,
  post: {
    image: string,
    name: string
  }
};

/* eslint-disable jsx-a11y/label-has-associated-control */

function CheckoutForm({ price, post }: FormProps) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const cardNumberElement = elements.getElement(CardNumberElement);
    let res;
    if (cardNumberElement) {
      res = await stripe.createToken(cardNumberElement);
    }
    const charge = {
      amount: price,
      currency: 'usd',
      description: post.image,
      token: res?.token?.id,
    };

    const response = await fetch('http://localhost:3001/api/v1/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        charge,
      }),
    });

    if (response.ok) {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="text-center flex-col">
        <span className="text-4xl">&#127881;</span>
        <h3 className="font-bold text-xl">Purchase complete!</h3>
        <p>Thank you for shopping with Flavored Cafe. We hope you enjoy your coffee.</p>
        <Link to="/dashboard">
          <div className="flex items-center cursor cursor-pointer my-1 mr-2 justify-end">
            <FontAwesomeIcon icon={faAngleLeft} className="text-2xl pr-1" />
            <span>Go to Dashboard</span>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Would you like to complete the purchase?</h3>
      <div className="flex justify-between">
        <div>
          <label htmlFor="cardNumber" className="font-semibold">Card Number</label>
          <div>
            <CardNumberElement />
          </div>
        </div>
        <div>
          <label htmlFor="cardName" className="font-semibold">Card Name</label>
          <div>
            <input
              type="text"
              name="cardName"
              required
              placeholder="Please Enter"
              pattern="[A-Za-z]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="r-5">
          <label htmlFor="CVC" className="font-semibold">CVC</label>
          <div>
            <CardCvcElement />
          </div>
        </div>
        <div>
          <label htmlFor="expDate" className="font-semibold">Exp. Date</label>
          <div>
            <CardExpiryElement />
          </div>
        </div>
      </div>
      <button type="submit" className="bg-amber-700 border-none py-1 px-2 rounded-lg font-semibold text-white mt-3" onClick={handleSubmit} disabled={loading}>{loading ? 'Please wait...' : 'Purchase'}</button>
    </div>
  );
}

export default CheckoutForm;

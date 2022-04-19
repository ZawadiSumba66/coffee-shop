import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

type ModalProps = {
  show: boolean,
  onHide: ((e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
  price: number
  post: {
    image: string,
    name: string
  }
};
const PUBLIC_KEY = 'pk_test_51Jzi59LnUe7MF1EUOSLkS3Dh02B33WCYk5wTu2lTvQh4aeJH6Y8p8B3JQIrcFGsEvXGr245ZmEziQzj4RixaMGCa00gdYTzb38';
const stripePromise = loadStripe(PUBLIC_KEY);

/* eslint-disable react/function-component-definition */
const Checkout = ({
  price, show, onHide, post,
}: ModalProps) => (
  <Modal
    size="lg"
    show={show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} post={post} />
      </Elements>
    </Modal.Body>
  </Modal>
);

export default Checkout;

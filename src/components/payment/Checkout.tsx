import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Modal } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

type ModalProps = {
  show: boolean,
  onHide: ((e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
  price: number
};

/* eslint-disable react/function-component-definition */
const Checkout: React.FunctionComponent<any> = ({ price, show, onHide }: ModalProps) => (
  <Modal
    size="lg"
    show={show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <StripeProvider apiKey={`${process.env.PUBLISHABLE_KEY}`}>
        <Elements>
          <CheckoutForm orderId={price} />
        </Elements>
      </StripeProvider>
    </Modal.Body>
  </Modal>
);

export default Checkout;

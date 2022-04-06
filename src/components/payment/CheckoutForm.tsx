import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  submit = async () => {
    const { stripe, price } = this.props;
    const { chargeToken } = await stripe.createToken({ name: 'Name' });
    const charge = {
      amount: price,
      currency: 'kes',
      description: 'lavored Coffee',
      token: chargeToken.token.id,
    };

    const response = await fetch('http://localhost:3001/charges', {
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
      this.setState({ completed: true });
    }
  };

  render() {
    const { completed } = this.state;
    if (completed) return <h3>Purchase complete!</h3>;

    return (
      <div>
        <h3>Would you like to complete the purchase?</h3>
        <CardElement />
        <button type="submit" onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

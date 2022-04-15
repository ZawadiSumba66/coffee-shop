import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../../containers/Header';
import { CoffeeOrders, getCoffeeOrders } from '../../redux/slices/order.slice';

type OrdersProps = {
  orders: CoffeeOrders[],
};

function Orders({ orders }: OrdersProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoffeeOrders());
  }, []);

  return (
    <div className="mx-10 mt-10">
      <Header />
      <h3 className="my-3 font-bold text-2xl">Your Orders</h3>
      <div className="grid grid-cols-4 gap-4">
        {orders.map((order: any) => (
          <div key={order.id} className="rounded-xl shadow-2xl bg-gray-200 h-58">
            <img src={order.description} alt={order.description} className=" h-40 w-100" />
            <p>{order.summary}</p>
            <span className="font-semibold">
              KES
              {' '}
              {order.amount.toFixed(2)}
            </span>
            <br />
            <a href={order.receipt_url} rel="noreferrer" target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-amber-700 text-white px-2 py-1 rounded-lg">
              View Receipt
            </a>
            <div>
              <p className="text-gray-900 text-sm pl-3 pb-2 pt-1 font-bold">{order.order}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type OrderState = {
  orders: {
    orders: []
  }
};

const mapStateToProps = (state: OrderState) => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps)(Orders);

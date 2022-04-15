import { combineReducers } from 'redux';
import userReducer from './slices/user.slice';
import avatarReducer from './slices/avatar.slice';
import categoryDataReducer from './slices/categories.slice';
import orderReducer from './slices/order.slice';

const rootReducer = combineReducers({
  user: userReducer,
  avatar: avatarReducer,
  data: categoryDataReducer,
  orders: orderReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import userReducer from './slices/user.slice';
import avatarReducer from './slices/avatar.slice';
import categoryDataReducer from './slices/categories.slice';
import coffeeReducer from './slices/coffee.slice';

const rootReducer = combineReducers({
  user: userReducer,
  avatar: avatarReducer,
  data: categoryDataReducer,
  coffee: coffeeReducer,
});

export default rootReducer;

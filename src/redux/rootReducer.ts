import { combineReducers } from 'redux';
import userReducer from './slices/user.slice';
import avatarReducer from './slices/avatar.slice';
import coffeDataReducer from './slices/coffeedata.slice';

const rootReducer = combineReducers({
  user: userReducer,
  avatar: avatarReducer,
  data: coffeDataReducer,
});

export default rootReducer;

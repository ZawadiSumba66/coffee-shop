import { combineReducers } from 'redux'
import userReducer from './slices/user.slice'
import avatarReducer from './slices/avatar.slice'

const rootReducer =combineReducers({
    user: userReducer,
    avatar: avatarReducer
});

export default rootReducer;

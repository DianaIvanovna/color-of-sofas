import { combineReducers } from 'redux'; // функция по объединению reducers
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer
})
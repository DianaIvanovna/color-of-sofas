
import { ADD_GENDER, SHOW_ALERT, HIDE_ALERT, SAVE_PHOTO } from "../actions/actionTypes";

const initialState = {
  gender: null,
  photo: null,
  interests: [],
  sofaPropertys: [],
  alertText: null
}

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case ADD_GENDER:
      return {...state, gender: action.payload };
    case SHOW_ALERT:
      return {...state, alertText: action.payload};
    case HIDE_ALERT:
        return {...state, alertText: null};
    case SAVE_PHOTO:
      return {...state, photo: action.payload};
    default: return state;
  }
}
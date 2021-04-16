
import { ADD_GENDER, ERROR_FORM } from "../actions/actionTypes";

const initialState = {
  gender: null,
  photo: null,
  interests: [],
  sofaPropertys: [],
  formInvalid: false,
  errorForm: false,
}

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case ADD_GENDER:
      return {...state, gender: action.payload, formInvalid: true, errorForm: false};
    case ERROR_FORM:
      return {...state, errorForm: true}
    default: return state;
  }
}
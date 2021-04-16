import { ADD_GENDER, ERROR_FORM } from "./actionTypes";

export function addGender(gender){
  return {
    type: ADD_GENDER,
    payload: gender
  }
}

export function showError(){
  return {
    type: ERROR_FORM
  }
}
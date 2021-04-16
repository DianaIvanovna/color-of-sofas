import { ADD_GENDER, SHOW_ALERT, HIDE_ALERT, ADD_PHOTO } from "./actionTypes";

export function addGender(gender){
  return {
    type: ADD_GENDER,
    payload: gender
  }
}

export function showAlert(text){
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export function hideAlert(){
  return {
    type: HIDE_ALERT,
  }
}


export function addPhoto(url){
  return {
    type: ADD_PHOTO,
    payload: url
  }
}
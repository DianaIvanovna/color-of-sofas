import { ADD_GENDER, SHOW_ALERT, HIDE_ALERT, SAVE_PHOTO, NEXT_PAGE_FORM, ADD_INTERESTS, ADD_SOFA_PROPERTYS } from "./actionTypes";

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

export function nextPageForm(){
  return {
    type: NEXT_PAGE_FORM,
  }
}

export function savePhoto(url){
  return {
    type: SAVE_PHOTO,
    payload: url
  }
}

export function addInterests(interests){
  return {
    type: ADD_INTERESTS,
    payload: interests,
  }
}

export function addSofaPropertys(propertys){
  return {
    type: ADD_SOFA_PROPERTYS,
    payload: propertys
  }
}
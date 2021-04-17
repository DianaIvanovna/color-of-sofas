import React from 'react';
import classes from './yourData.module.scss';

import { useDispatch, useSelector } from 'react-redux'; // отправлять экшены
import { addGender, hideAlert, nextPageForm, showAlert } from '../../store/actions/actionsUser';

import UploadPhoto from "../../component/UploadPhoto/UploadPhoto";
import AuthSocialNetwork from "../../component/authSocialNetwork/AuthSocialNetwork";

import imageMan from "../../img/settings/man.png";
import imageGirl from "../../img/settings/girl.png";
import backTitle from "../../img/settings/back-action.svg";

const YourData = () => {
  const dispatch = useDispatch();
  const alertText = useSelector(state => state.user.alertText);

  const submitHandler = (event) => {
    event.preventDefault();
    if (document.forms.userForm.elements.gender.value) {
      dispatch((addGender(document.forms.userForm.elements.gender.value)));
      dispatch(hideAlert());
      dispatch(nextPageForm());

      // this.props.addGender(document.forms.userForm.elements.gender.value);
      // this.props.hideAlert();
      // // переход на след страницу
      // this.activePage++;

    } else {
      dispatch(showAlert('*Выбор пола обязателен'))
    }
  }

  return (
    <div className={classes.settings__container}  >
      <form className={classes.form} onSubmit={submitHandler} id="userForm">
        <div className={classes.input}>
          <img className={classes.form__image} src={imageMan} alt="icon man" width={76} height={115}></img>
          <input className={classes.radioButton} name="gender" type="radio" value="man" id="radioMan"/>
          <label htmlFor="radioMan">Мужчина</label>
        </div>
        <div className={classes.input}>
          <input className={classes.radioButton}name="gender" type="radio" value="woman" id ="radioWoman"/>
          <label htmlFor="radioWoman">Женщина</label>
          <img className={classes.form__image} src={imageGirl} alt="icon girl" width={76} height={115}></img>
        </div>
      </form>
      <h2 className={classes.caption}>
        <img src={backTitle} alt="фон" className={classes.caption__back} width={200} height={70}></img>
        а также
      </h2>
      <p className={classes.text}>Это необязательно для заполнения, но представь
      как классно твоё фото будет смотреться рядом с диваном</p>

      <p className={classes.alert}>{alertText}</p>

      <div className={classes.download}>
        <div className={classes.download__item}>
          <p className={classes.download__title}>Авторизуйся</p>
          <AuthSocialNetwork/>
        </div>
        <p className={classes.download__text}>или</p>
        <UploadPhoto/>
      </div>
      <button
        className={classes.button}
        type="submit"
        onClick={submitHandler}
      >
        <span>Найти свой диван</span>
      </button>

      <div className={classes.input__checkbox}>
        <input type="checkbox" id="agreeInput" name="agreeInput" value="false" form="userForm" defaultChecked></input>
        <label htmlFor="agreeInput" className={classes.input__agree}>Я согласен с пользовательским соглашением и с обработкой персональной данных </label>
      </div>
    </div>
  )
}
export default YourData;
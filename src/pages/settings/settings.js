import React, {Component} from 'react';
import classes from './settings.module.scss';
// redux
import { connect } from 'react-redux';
import { addGender, showAlert, hideAlert } from "../../store/actions/actionsUser";
// component
import UploadPhoto from "../../component/UploadPhoto/UploadPhoto";
import AuthSocialNetwork from "../../component/authSocialNetwork/AuthSocialNetwork";
// image
import {  backgroundSofa, backgroundSofa2, backgroundSofa3, backgroundHead,} from "../../assets/images";
import imageMan from "../../img/settings/man.png";
import imageGirl from "../../img/settings/girl.png";
import backTitle from "../../img/settings/back-action.svg";


class Settings extends Component {

  addPhoto = (src)=>{
    // ДОБАВЬ REDUCE ПО ДОБАВЛЕНИЮ ФОТО
    // this.setState({
    //   user: {
    //     photo: {src}
    //   }
    // })
    // console.log(this.state.user.photo);
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (document.forms.userForm.elements.gender.value) {
      this.props.addGender(document.forms.userForm.elements.gender.value);
      this.props.hideAlert();
      // переход на след страницу
    } else {
      this.props.showAlert('*Выбор пола обязателен');
    }
  }

  render(){
    let backgroundImg =
    <div>
      <img src={backgroundSofa} alt="super sofa" className={classes.home__backImg}></img>
      <img src={backgroundSofa2} alt="super sofa" className={classes.home__backImg}></img>
      <img src={backgroundSofa3} alt="super sofa" className={classes.home__backImg}></img>

      <img src={backgroundHead} alt="head" className={classes.home__backImg} width={55} height={55}></img>
      <img src={backgroundHead} alt="head" className={classes.home__backImg} width={168} height={168}></img>
      <img src={backgroundHead} alt="head" className={classes.home__backImg} width={202} height={202}></img>
      <img src={backgroundHead} alt="head" className={classes.home__backImg} width={202} height={202}></img>
      <img src={backgroundHead} alt="head" className={classes.home__backImg} width={55} height={55}></img>
    </div>;

    return(
      <section className={classes.settings}>
        {/* картинки для фона */ window.innerWidth > 1040?backgroundImg:null }
        <div className={classes.settings__container}>
          <h1 className={classes.title}>твои данные</h1>
          <p className={classes.subtitle}>Мы подберём для тебя идеальную пару</p>

          <form className={classes.form} onSubmit={this.submitHandler} id="userForm">
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
          <p className={classes.alert}>{this.props.alertText}</p>
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
            onClick={this.submitHandler}
          >
            <span>Найти свой диван</span>
          </button>

          <div className={classes.input__checkbox}>
            <input type="checkbox" id="agreeInput" name="agreeInput" value="false" form="userForm" defaultChecked></input>
            <label htmlFor="agreeInput" className={classes.input__agree}>Я согласен с пользовательским соглашением и с обработкой персональной данных </label>
          </div>
        </div>
      </section>
    )
  };
}

const mapStateToProps = state => {
  return {
    gender: state.user.gender,
    photo: state.user.photo,
    interests: state.user.interests,
    sofaPropertys: state.user.sofaPropertys,
    formInvalid: state.user.formInvalid,
    alertText: state.user.alertText,
  }
}

const mapDispatchToProps = {
  addGender,
  showAlert,
  hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
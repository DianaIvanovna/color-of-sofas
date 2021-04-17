import React, {Component} from 'react';
import classes from './settings.module.scss';
// redux
import { connect } from 'react-redux';
import { addGender, showAlert, hideAlert } from "../../store/actions/actionsUser";
// component
import YourData from "../../component/yourData/yourData";
import {  backgroundSofa, backgroundSofa2, backgroundSofa3, backgroundHead,} from "../../assets/images";

class Settings extends Component {
  
  content = this.props.activePageForm ===0?<YourData/>:null;

  updateSubtitle(){
    return {
      __html: this.props.form[this.props.activePageForm].subtitle
    };
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

        {/* номер страницы */}
        <p className={classes.pageNumber}>
          <span>{this.props.activePageForm+1}</span> / {this.props.form.length}
        </p>
        {/* заголовок */}
        <div className={classes.title__container}>
          <h1 className={classes.title}>{this.props.form[this.props.activePageForm].title}</h1>
          <p className={classes.subtitle} dangerouslySetInnerHTML={this.updateSubtitle()}>
          </p>
        </div>

        {this.props.activePageForm ===0?<YourData/>:null}

        {/* форма для 1 страницы */}
        {/* <div className={classes.settings__container}  >
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
        </div> */}
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
    activePageForm: state.user.activePageForm,
    form: state.user.form,
  }
}

const mapDispatchToProps = {
  addGender,
  showAlert,
  hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
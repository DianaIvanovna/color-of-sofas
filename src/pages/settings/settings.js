import React, {Component} from 'react';
import classes from './settings.module.scss';
import imageMan from "../../img/settings/man.png";
import imageGirl from "../../img/settings/girl.png";
import backTitle from "../../img/settings/back-action.svg";
import vk from "../../img/vk.svg";
import fb from "../../img/fb.svg";
import plus from "../../img/plus.svg";


export default class Settings extends Component {

  submitHandler = (event) => {
    event.preventDefault()
  }

  render(){
    return(
      <section className={classes.settings}>
        <h1 className={classes.title}>твои данные</h1>
        <p className={classes.subtitle}>Мы подберём для тебя идеальную пару</p>
        <form className={classes.form} onSubmit={this.submitHandler} id="userForm">
          <div className={classes.input}>
            <img className={classes.form__image} src={imageMan} alt="icon man" width={76} height={115}></img>
            <input className={classes.radioButton}name="gender" type="radio" value="man" id="radioMan"/>
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
        <div className={classes.download}>
          <div className={classes.download__item}>
            <p className={classes.download__title}>Авторизуйся</p>
            <div className={classes.icons}>
              <div className={classes.download__icon}>
                <img width={23} height={12} src={vk} alt="icon vk"></img>
              </div>
              <div className={classes.download__icon}>
                <img width={12.5} height={23} src={fb} alt="icon facebook"></img>
              </div>
            </div>
          </div>
          <p className={classes.download__text}>или</p>
          <div className={classes.download__item}>
            <p className={classes.download__title}>Загрузи фото</p>
            <div className={classes.download__icon}>
              <img width={24} height={24} src={plus} alt="icon add"></img>
            </div>
          </div>
        </div>
        <button className={classes.button}>Найти свой диван</button>

        <div className={classes.input__checkbox}>
          <input type="checkbox" id="agreeInput" name="agreeInput" value="false" form="userForm"></input>
          <label htmlFor="agreeInput" className={classes.input__agree}>Я согласен с пользовательским соглашением и с обработкой персональной данных </label>
        </div>

      </section>
    )
  };
}
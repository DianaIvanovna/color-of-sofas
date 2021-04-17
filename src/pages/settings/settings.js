import React, {Component} from 'react';
import classes from './settings.module.scss';
// redux
import { connect } from 'react-redux';
import { addGender, showAlert, hideAlert } from "../../store/actions/actionsUser";
// component
import YourData from "../../component/yourData/yourData";
import Checkbox from "../../component/Checkbox/Checkbox";
// images
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
        {/* контент */}
        {this.props.activePageForm ===0?<YourData/>:<Checkbox/>}
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
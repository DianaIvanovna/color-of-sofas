import React from 'react-redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Checkbox.module.scss';
import {addInterests} from "../../store/actions/actionsUser";

class Checkbox extends Component {

  button;
  checkedInputs=0;

  componentDidMount(){
    this.button = document.querySelector(`.${classes.button}`);
    this.button.setAttribute('disabled', 'disabled')
  }

  checkboxLimit = (event) =>{
    if (event.target.type === 'checkbox'){
      this.button.setAttribute('disabled', 'disabled');
      if (event.target.checked === true) this.checkedInputs++;
      else {
        this.checkedInputs--;
        document.forms.interestForm.elements.interest.forEach((input)=> {
          input.disabled = false;
        });
      }
      if (this.checkedInputs === 3){
        this.button.removeAttribute('disabled');
        document.forms.interestForm.elements.interest.forEach((input)=> {
          if (input.checked !== true) input.disabled = true
        });
      }
    }
  }

  buttonHandler = () => {
    const interests = [];
    document.forms.interestForm.elements.interest.forEach((input)=> {
      if (input.checked) interests.push(input.value);
    });
    this.props.addInterests(interests)
    // следующая страница
  }

  render(){
    return(
      <div className={classes.checkbox__container}>
        <form className={classes.form} onClick={this.checkboxLimit} id="interestForm">
  
          {
            this.props.gender ==='man'? 
              this.props.interestsMen.map((checkbox, index) => {
                return (
                  <label className={classes.checkboxButton} key={index}>
                    <input type="checkbox" name="interest" value={checkbox}/>
                    <span>{checkbox}</span>
                  </label>
                )
              })
            : this.props.interestsWomen.map((checkbox, index) => {
              return (
                <label className={classes.checkboxButton} key={index}>
                  <input type="checkbox" name="interest" value={checkbox}/>
                  <span>{checkbox}</span>
                </label>
              )
            })
          }
  
        </form>
  
        <button
          className={classes.button}
          type="submit"
          onClick = {this.buttonHandler.bind(this)}
        >
          <span>{this.props.buttonText}</span>
        </button>
  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gender: state.user.gender,
    interestsWomen: state.user.form[1].interestsWomen,
    interestsMen: state.user.form[1].interestsMen,
    buttonText: state.user.form[1].buttonText,
  }
}

const mapDispatchToProps = {
  addInterests,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
import React from 'react-redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Checkbox.module.scss';
import {addInterests, addSofaPropertys, nextPageForm} from "../../store/actions/actionsUser";

class Checkbox extends Component {

  checkedInputs=0;

  componentDidMount(){
    this.button = document.querySelector(`.${classes.button}`);
    this.button.setAttribute('disabled', 'disabled');
  }

  checkboxLimit = (event) =>{
    // console.log('elements ', document.forms.interestForm.elements)
    // console.log('interest ',document.forms.interestForm.elements.interest)
    // console.log('sofaPropertys ',document.forms.interestForm.elements.sofaPropertys)
    // console.log("-------------------")
    // let inputs = [];
    // if (this.props.activePageForm === 1) inputs = document.forms.interestForm.elements.interest;
    // else  inputs = document.forms.interestForm.elements.sofaPropertys;

    if (event.target.type === 'checkbox'){
      this.button.setAttribute('disabled', 'disabled');
      if (event.target.checked === true) this.checkedInputs++;
      else {
        this.checkedInputs--;
        Array.from(document.forms.interestForm.elements).forEach((input)=> {
          input.disabled = false;
        });
        // document.forms.interestForm.elements.forEach((input)=> {
        //   input.disabled = false;
        // });
      }
      if (this.checkedInputs === 3){
        this.button.removeAttribute('disabled');
        Array.from(document.forms.interestForm.elements).forEach((input)=> {
          if (input.checked !== true) input.disabled = true
        });
      }
    }
  }

  clearForm(){
    this.button.setAttribute('disabled', 'disabled');
    this.checkedInputs = 0;
    Array.from(document.forms.interestForm.elements).forEach((input)=> {
      input.disabled = false;
      input.checked = false
    });
  }

  buttonHandler = () => {
    const elements = []
    Array.from(document.forms.interestForm.elements).forEach((input)=> {
      if (input.checked) elements.push(input.value);
    });
    if (this.props.activePageForm === 1){
      this.props.addInterests(elements);
      this.props.nextPageForm();
      this.clearForm();
    } else {
      this.props.addSofaPropertys(elements)
    }
  }

  render(){
    return(
      <div className={classes.checkbox__container}>



        <form className={classes.form} onClick={this.checkboxLimit} id="interestForm">
  -
          {
            this.props.activePageForm === 1? 
              this.props.gender ==='man'? 
                this.props.form[this.props.activePageForm].interestsMen.map((checkbox, index) => {
                    return (
                      <label className={classes.checkboxButton} key={index}>
                        <input type="checkbox" name="interest" value={checkbox}/>
                        <span>{checkbox}</span>
                      </label>
                    )
                  })
                : this.props.form[this.props.activePageForm].interestsWomen.map((checkbox, index) => {
                  return (
                    <label className={classes.checkboxButton} key={index}>
                      <input type="checkbox" name="interest" value={checkbox}/>
                      <span>{checkbox}</span>
                    </label>
                  )
                })
            : this.props.form[this.props.activePageForm].sofaPropertys.map((checkbox, index) => {
              return (
                <label className={classes.checkboxButton} key={index}>
                  <input type="checkbox" name="sofaPropertys" value={checkbox}/>
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
          <span>{this.props.form[this.props.activePageForm].buttonText}</span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gender: state.user.gender,
    form: state.user.form,
    activePageForm: state.user.activePageForm,
  }
}

const mapDispatchToProps = {
  addInterests,
  addSofaPropertys,
  nextPageForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
import React from 'react-redux';
import classes from './Checkbox.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Checkbox = () => {
  const dispatch = useDispatch();
  const gender = useSelector(state => state.user.gender);
  const interestsMen = useSelector(state => state.user.form[1].interestsMen);
  const interestsWomen = useSelector(state => state.user.form[1].interestsWomen);
  let viewArr = [];
  if (gender === 'man') viewArr = interestsMen;
  else viewArr = interestsWomen;

  const checkboxLimit = (event) =>{
    if (event.target.type === 'checkbox'){
      console.log(document.forms.interestForm.elements.interest)
      let inputs = document.forms.interestForm.elements.interest;
      let checkedInput = 0;
      inputs.forEach((input)=> {
        if (input.checked === true) checkedInput++;
        input.disabled = false;
      });
      if (checkedInput === 3){
        inputs.forEach((input)=> {
          if (input.checked !== true) input.disabled = true
        });
      }
    }
  }

  return(
    <div className="">
      <form className={classes.form} onClick={checkboxLimit} id="interestForm">

        {
          viewArr.map((checkbox, index) => {
            return (
              <label className={classes.checkboxButton} key={index}>
                <input type="checkbox" name="interest"/>
                <span>{checkbox}</span>
              </label>
            )
          })
        }

      </form>
    </div>
  )
}

export default Checkbox;
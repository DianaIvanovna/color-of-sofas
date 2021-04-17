import React from 'react-redux';
import classes from './Checkbox.module.scss';

const Checkbox = () => {
  return(
    <div className="">
      <form className={classes.form}>

        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>Checkbox #1</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>box #2</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>Checkbox #3</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox" disabled/>
          <span>Checkbox #4</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>Checkbox #5</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>Checkbox #6</span>
        </label>
        <label className={classes.checkboxButton}>
          <input type="checkbox"/>
          <span>Checkbox #7</span>
        </label>

      </form>
    </div>
  )
}

export default Checkbox;
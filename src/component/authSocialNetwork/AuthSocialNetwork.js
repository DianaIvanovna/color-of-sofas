import React from 'react';
import classes from './AuthSocialNetwork.module.scss';
import vk from "../../img/vk.svg";
import fb from "../../img/fb.svg";

const AuthSocialNetwork = props => {
  const authVk = () => {
  }



  return (
    <div className={classes.icons}>
      <div className={classes.icon} onClick={authVk}>
        <img width={23} height={12} src={vk} alt="icon vk"></img>
      </div>
      <div className={classes.icon}>
        <img width={12.5} height={23} src={fb} alt="icon facebook"></img>
      </div>
    </div>
  )
}

export default AuthSocialNetwork;
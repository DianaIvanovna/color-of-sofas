import React from 'react';
import axios from'axios';
import classes from './AuthSocialNetwork.module.scss';
import vk from "../../img/vk.svg";
import fb from "../../img/fb.svg";

const AuthSocialNetwork = props => {
  const authVk = () => {
    // axios.get('https://oauth.vk.com/authorize?client_id=7804077&display=page&redirect_uri=http://garbuzdiana.tmweb.ru/settings&scope=friends&response_type=token&v=5.52')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
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
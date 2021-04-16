import React from 'react';
import classes from './AuthSocialNetwork.module.scss';
import vk from "../../img/vk.svg";
import fb from "../../img/fb.svg";

// ВНЕСИ В КОНФИГУРАЦИЮ ESLINT VK AND FB

const AuthSocialNetwork = props => {
  // функция загрузки фото с вк
  const authVk = () => {
    // eslint-disable-next-line no-undef
    VK.init({
      apiId: 7804077
    });
    // eslint-disable-next-line no-undef
    VK.Auth.login((response)=>{
      if (response.session) { /* Пользователь успешно авторизовался */
        // eslint-disable-next-line no-undef
        VK.Api.call('users.get', {
          user_ids: response.session.user.id,
          fields: 'photo_max',
          v:"5.73"},
          function(r) {
            console.log(r.response[0].photo_max); // фото
          });
      } else {

      }
      // eslint-disable-next-line no-undef
    }, VK.access.PHOTOS)
  }

  const authFB = ()=>{
  // eslint-disable-next-line no-undef
  FB.init({
    appId            : '202220517908280',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v10.0'
  });

  // eslint-disable-next-line no-undef
  FB.login(function(response) {
    if (response.status === 'connected') { //Logged into your webpage and Facebook.
      // eslint-disable-next-line no-undef
      FB.api(
        `/me/picture?redirect=false`,
        'GET',
        {"type":"normal"},
        function(response) {
            console.log(response.data.url) // фото из фейсбука
        }
      );
    } else {
      // The person is not logged into your webpage or we are unable to tell.
    }
  }, {scope: 'user_photos'});

  }

  return (
    <div className={classes.icons}>
      <div className={classes.icon} onClick={authVk}>
        <img width={23} height={12} src={vk} alt="icon vk"></img>
      </div>
      <div className={classes.icon} onClick={authFB}>
        <img width={12.5} height={23} src={fb} alt="icon facebook"></img>
      </div>
    </div>
  )
}

export default AuthSocialNetwork;
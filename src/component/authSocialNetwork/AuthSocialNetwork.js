import React from 'react';
import classes from './AuthSocialNetwork.module.scss';
import { useDispatch, useSelector } from 'react-redux'; // отправлять экшены
import { authVKImg, authFBImg, showAlert } from '../../store/actions/actionsUser';
import vk from "../../img/vk.svg";
import fb from "../../img/fb.svg";
import iconCheck from "../../img/icon-check.svg"

const AuthSocialNetwork = props => {
  const dispatch = useDispatch();
  const flagVK = useSelector((store)=>store.user.showButtonVK);
  const flagFB = useSelector((store)=>store.user.showButtonFB);

  // функция загрузки фото с вк
  const authVk = () => {
    VK.init({
      apiId: 7804077
    });
    VK.Auth.login((response)=>{
      if (response.session) { /* Пользователь успешно авторизовался */
        VK.Api.call('users.get', {
          user_ids: response.session.user.id,
          fields: 'photo_max',
          v:"5.73"},
          function(r) {
            dispatch(authVKImg(r.response[0].photo_max));
            dispatch(showAlert('Авторизация прошла успешно'));
          });
      } else {
        dispatch(showAlert('что-то пошло не так...'))
      }
    }, VK.access.PHOTOS)

  }

  const authFB = ()=>{
    FB.init({
      appId            : '202220517908280',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v10.0'
    });

    FB.login(function(response) {
      if (response.status === 'connected') { //Logged into your webpage and Facebook.
        FB.api(
          `/me/picture?redirect=false`,
          'GET',
          {"type":"normal"},
          function(response) {
            console.log(response.data.url)
            dispatch(authFBImg(response.data.url))// фото из фейсбука
            dispatch(showAlert('Авторизация прошла успешно'));
          }
        );
      } else {
        // The person is not logged into your webpage or we are unable to tell.
        dispatch(showAlert('что-то пошло не так...'))
      }
    }, {scope: 'user_photos'});

  }

  return (
    <div className={classes.icons}>
      {/* <div className={classes.icon} onClick={authVk}>
        <img width={23} height={12} src={vk} alt="icon vk"></img>
      </div> */}
      {
        flagVK === false ? 
          <div className={classes.icon} onClick={authVk}>
            <img width={23} height={12} src={vk} alt="icon vk"></img>
          </div>
          :<div className={classes.iconAttention}>
            <img width={24} height={24} src={iconCheck} alt="icon ckeck"></img>
          </div>
      }
      {
        flagFB === false ? 
          <div className={classes.icon} onClick={authFB}>
            <img width={12.5} height={23} src={fb} alt="icon facebook"></img>
          </div>
          :<div className={classes.iconAttention}>
            <img width={24} height={24} src={iconCheck} alt="icon ckeck"></img>
          </div>
      }


      {/* <div className={classes.icon} onClick={authFB}>
        <img width={12.5} height={23} src={fb} alt="icon facebook"></img>
      </div> */}
    </div>

  )
}

export default AuthSocialNetwork;
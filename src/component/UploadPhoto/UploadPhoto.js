import React from 'react';
import classes from './UploadPhoto.module.scss';
import plus from "../../img/plus.svg";
import { useDispatch } from 'react-redux'; // отправлять экшены
import { savePhoto, showAlert } from "../../store/actions/actionsUser";

const UploadPhoto = () => {
  const dispatch = useDispatch();

  const triggerUploadPhoto = () => document.getElementById('uploadPhoto').click();

  const uploadPhotoHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (!event.target.files || !file.type.match('image')) {
      return;
    }
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      // сохраняем соотношение сторон
      img.onload = () => { // resizes photo
        const width = 200;
        const scaleFactor = width / img.width;
        const elem = document.createElement('canvas');
        elem.width = width;
        elem.height = img.height * scaleFactor;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
        ctx.stroke(); // получаем base64
        dispatch(savePhoto(elem.toDataURL()))// возвращаю картинку в base64 шириной 200px
        dispatch(showAlert('Фото загружено'));
      }
    }
    reader.onerror = function() {
      dispatch(showAlert('Фото не загрузилось'));
    };
    reader.readAsDataURL(file); // считать данные как base64-кодированный URL
  }

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="file"
        id="uploadPhoto"
        onChange={uploadPhotoHandler}
        accept=".png, .jpg, .jpeg, webp"
      />
      <p className={classes.title}>Загрузи фото</p>
      <div className={classes.icon} onClick={triggerUploadPhoto}>
        <img width={24} height={24} src={plus} alt="icon add"></img>
      </div>
  </div>
  )
}

export default UploadPhoto;
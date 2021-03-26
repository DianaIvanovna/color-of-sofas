import React from 'react';
import classes from './UploadPhoto.module.scss';
import plus from "../../img/plus.svg";

const UploadPhoto = props => {

  const triggerUploadPhoto = () => document.getElementById('uploadPhoto').click();

  const uploadPhotoHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (!event.target.files || !file.type.match('image')) {
      return;
    }
    reader.onload = event => {
      const src = event.target.result; // закодированная картинка
      props.uploadPhoto(src);
    }
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
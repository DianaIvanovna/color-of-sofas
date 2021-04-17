import { takeEvery, call, put } from "redux-saga/effects";
// import { showAlert } from "../actions/actionsUser";

export function* sagaWatcher(){
}

// function* workerFileRead(data){
//   // try {
//   //   // const payload = yield call(fileRead, data.payload);
//   //   // yield console.log(payload);

//   //   // yield put({ type: UPLOAD_PHOTO, payload })
//   // }
//   // catch (e) {
//   //   console.log('jib,rf',e)
//   //   yield put(showAlert('Ошибка с загрузкой фото'))
//   // }
// }


// function fileRead(event){
//   const file = event.target.files[0];
//   const reader = new FileReader();
//   if (!event.target.files || !file.type.match('image')) {
//     return;
//   }
//   reader.onload = event => {
//     const img = new Image();
//     img.src = event.target.result;
//     // сохраняем соотношение сторон
//     // resizes photo
//     img.onload = () => {
//       const width = 200;
//       const scaleFactor = width / img.width;
//       const elem = document.createElement('canvas');
//       elem.width = width;
//       elem.height = img.height * scaleFactor;
//       const ctx = elem.getContext('2d');
//       ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
//       ctx.stroke(); // получаем base64
//       console.log(elem.toDataURL())
//       return elem.toDataURL() // возвращаю картинку в base64 шириной 200px
//     }
//   }
//   reader.onerror = function() {
//     throw new Error();
//   };
//   reader.readAsDataURL(file); // считать данные как base64-кодированный URL
// }

// import { takeEvery, call, put } from "redux-saga/effects";
// import { AUTH_VK } from "../actions/actionTypes";

export function* sagaWatcher(){
//   yield takeEvery(AUTH_VK, workerAuthVK)
}

// function* workerAuthVK(){
//     yield VK.init({
//       apiId: 7804077
//     });
//     let photo;
//     let error;
//     yield VK.Auth.login((response)=>{
//       if (response.session) { /* Пользователь успешно авторизовался */
//         VK.Api.call('users.get', {
//           user_ids: response.session.user.id,
//           fields: 'photo_max',
//           v:"5.73"},
//           function(r) {
//             photo =r.response[0].photo_max; // фото
//           });
//       } else {

//       }
//     }, VK.access.PHOTOS)
//     yield console.log(photo)
// }

    // VK.init({
    //   apiId: 7804077
    // });
    // VK.Auth.login((response)=>{
    //   if (response.session) { /* Пользователь успешно авторизовался */
    //     VK.Api.call('users.get', {
    //       user_ids: response.session.user.id,
    //       fields: 'photo_max',
    //       v:"5.73"},
    //       function(r) {
    //         console.log(r.response[0].photo_max); // фото
    //       });
    //   } else {

    //   }
    // }, VK.access.PHOTOS)
// import Vue from 'nativescript-vue'
//
// export function appLogin(credentials) {
//     return new Promise((resolve, reject) => {
//         Vue.$app.api.post('auth/login', credentials)
//             .then((responce) => {
//                 // setAuthorization(responce.data.access_token);
//                 resolve(responce.data);
//             })
//             .catch((err) =>{
//                 reject("Wrong email or password");
//             })
//     })
// }

export function init(store) {

    let token = store.getters.getApiToken;

    if ( token !== 'undefined' ) {
        return store.getters.getHeaders;
    }

}

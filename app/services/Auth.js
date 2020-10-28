export function init(store) {

  let token = store.getters.getApiToken;

  if (token !== 'undefined') {
    return store.getters.getHeaders;
  }

}

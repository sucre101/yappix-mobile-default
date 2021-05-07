import * as http from '@nativescript/core/http';

export default class ApiService {

  constructor(network, appId, headers) {
    this.baseUrl = process.env.VUE_BASE_URL + appId + '/'
    this.network = network;
    this.headers = headers;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  setHeader(headers) {
    this.headers = headers;
  }

  getHeaders() {
    return this.headers;
  }

  setHeaders(headers) {
    this.headers = headers;
  }

  setDevice(device_id) {
    this.headers.device = device_id
  }

  validate(response) {
    return new Promise((resolve, reject) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        resolve(response);
      }

      reject({
        statusCode: response.statusCode,
        message: response.content.toString()
      });
    })
  }

  getJson(response) {
    return new Promise((resolve) => {
      resolve(response.content.toJSON());
    })
      .catch((e) => {
        throw 'Error parsing JSON response: ' + e;
      });
  }

  get(endPoint) {
    if (!this.network.isOnline) {
      return new Promise((resolve, reject) => {
        reject({
          statusCode: '',
          message: 'Please check your internet connection'
        });
      });
    }

    return http.request({
      url: this.baseUrl + endPoint,
      method: 'GET',
      headers: this.headers,
    })
      .then(this.validate)
      .then(this.getJson);
  }

  post(endPoint, postData) {
    if (!this.network.isOnline) {
      return new Promise((resolve, reject) => {
        reject({
          statusCode: '',
          message: 'Please check your internet connection'
        });
      });
    }

    return http.request({
      url: this.baseUrl + endPoint,
      method: 'POST',
      headers: this.headers,
      content: JSON.stringify(postData)
    })
      .then(this.validate)
      .then(this.getJson);
  }


}

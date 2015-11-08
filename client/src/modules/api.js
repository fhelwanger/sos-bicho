import fetch from 'isomorphic-fetch';
import qs from 'qs/dist/qs';

const basePath = '/api/';

function includeAuthorization(headers) {
  const credentials = localStorage.getItem('credentials');

  if (credentials) {
    headers['Authorization'] = 'Basic ' + credentials;
  }
}

export function get(endpoint, params) {
  return new Promise((resolve, reject) => {
    const headers = {};

    includeAuthorization(headers);

    const options = {
      method: 'GET',
      headers
    };

    const query = qs.stringify(params);

    const url = basePath + endpoint + (query ? '?' + query : '');

    fetch(url, options).then(response => {
      if (response.ok) {
        response.json().then(resolve);
      } else {
        response.text().then(reject);
      }
    });
  });
}

export function post(endpoint, data) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    includeAuthorization(headers);

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    };

    fetch(basePath + endpoint, options).then(response => {
      if (response.ok) {
        if (response.status === 200) {
          response.json().then(resolve);
        } else {
          resolve();
        }
      } else {
        if (response.status === 400) {
          response.json().then(reject);
        } else {
          response.text().then(error => reject({_error: error}));
        }
      }
    });
  });
}

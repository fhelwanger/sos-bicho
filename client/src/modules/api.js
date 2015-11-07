import fetch from 'isomorphic-fetch';

const basePath = '/api/'

export function post(endpoint, data) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

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

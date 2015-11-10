import fetch from 'isomorphic-fetch';
import qs from 'qs/dist/qs';

const basePath = '/api/';

export function get(endpoint, query) {
  return makePromise({
    method: 'GET',
    endpoint,
    query
  });
}

export function post(endpoint, body, query) {
  return makePromise({
    method: 'POST',
    endpoint,
    body,
    query
  });
}

export function put(endpoint, body, query) {
  return makePromise({
    method: 'PUT',
    endpoint,
    body,
    query
  });
}

export function del(endpoint, query) {
  return makePromise({
    method: 'DELETE',
    endpoint,
    query
  });
}

export function makePromise(options) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    includeAuthorization(headers);

    const fetchOpts = {
      method: options.method,
      headers: headers,
      body: JSON.stringify(options.body)
    };

    const query = qs.stringify(options.query);
    const url = basePath + options.endpoint + (query ? '?' + query : '');

    fetch(url, fetchOpts).then(handleResponse(resolve, reject));
  });
}

function includeAuthorization(headers) {
  const credentials = localStorage.getItem('credentials');

  if (credentials) {
    headers['Authorization'] = 'Basic ' + credentials;
  }
}

function handleResponse(resolve, reject) {
  return response => {
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
        response.text().then(error => reject({ _error: error }));
      }
    }
  }
}

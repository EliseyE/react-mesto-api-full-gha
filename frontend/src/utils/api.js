import {
  API_HEADERS,
  API_BASE_URL
}  from './constants.js';

class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _downloadData(path) {
    return fetch(`${this._baseUrl}${path.path}`, {
      headers: { authorization: this._headers.authorization }
    })
    .then(res => {return this._responceProcessing(res)})
  }

  _uploadData(path, data, method) {
    return fetch(`${this._baseUrl}${path.path}`, {
      method: method,
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {return this._responceProcessing(res)})
  }

  _responceProcessing(res) {
    if(res.ok) {
      return res.json(); }
    return Promise.reject(`Ошибка в Api: ${res.status}`);
  }

  getInitialCards() {
    return this._downloadData({ path: '/cards' } );
  }

  getMyProfileData() {
    return this._downloadData({ path: '/users/me' });
  }

  uploadCard(cardData) {
    return this._uploadData({ path: '/cards' }, cardData, 'POST');
  }

  uploadUserInfo(userInfo) {
    return this._uploadData({ path: '/users/me' }, userInfo, 'PATCH');
  }

  uploadAvatar(link) {
    return this._uploadData({ path: '/users/me/avatar' }, link, 'PATCH');
  }

  deletCard(cardId) {
    return this._uploadData({ path: `/cards/${cardId}` }, {}, 'DELETE');
  }

  likeCard(cardId) {
    return this._uploadData({ path: `/cards/${cardId}/likes` }, {}, 'PUT');
  }

  unlikeCard(cardId) {
    return this._uploadData({ path: `/cards/${cardId}/likes` }, {}, 'DELETE');
  }

  changeLikeCardStatus(cardId, nextLikeStatus) {
    return this._uploadData({ path: `/cards/${cardId}/likes` }, {}, nextLikeStatus ? 'PUT' : 'DELETE');
  }
};

const apiModule = new Api(API_BASE_URL, API_HEADERS);

export {apiModule};

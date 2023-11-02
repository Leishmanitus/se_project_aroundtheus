export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._endpoints = {
      userUrl: this._baseUrl + "/users/me",
      avatarUrl: this._baseUrl + "/users/me/avatar",
      cardsUrl: this._baseUrl + "/cards",
    };
  }

  _getResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  _stringifyData = (data) => {
    return JSON.stringify(data);
  };

  _likesUrl = (cardId) => {
    return `${this._baseUrl}/cards/${cardId}/likes`;
  };

  getUserInformation = () => {
    return fetch(this._endpoints.userUrl, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  };

  updateUserInformation = ({ name, about }) => {
    return fetch(this._endpoints.userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: this._stringifyData({ name, about }),
    }).then((res) => this._getResponse(res));
  };

  updateAvatar = ({ avatar }) => {
    return fetch(this._endpoints.avatarUrl, {
      method: "PATCH",
      headers: this._headers,
      body: this._stringifyData({ avatar }),
    }).then((res) => this._getResponse(res));
  };

  getInitialCards = () => {
    return fetch(this._endpoints.cardsUrl, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  };

  postCard = ({ name, link }) => {
    return fetch(this._endpoints.cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: this._stringifyData({ name, link }),
    }).then((res) => this._getResponse(res));
  };

  deleteCard = (cardId) => {
    return fetch(this._endpoints.cardsUrl + `/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  };

  likeCard(cardId) {
    return fetch(this._likesUrl(cardId), {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }

  dislikeCard(cardId) {
    return fetch(this._likesUrl(cardId), {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponse(res));
  }
}

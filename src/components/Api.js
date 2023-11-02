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

  _request = (url, options) => {
    return fetch(url, options).then(this._getResponse);
  };

  getUserInformation = () => {
    return this._request(this._endpoints.userUrl, {
      method: "GET",
      headers: this._headers,
    });
  };

  updateUserInformation = ({ name, about }) => {
    return this._request(this._endpoints.userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: this._stringifyData({ name, about }),
    });
  };

  updateAvatar = ({ avatar }) => {
    return this._request(this._endpoints.avatarUrl, {
      method: "PATCH",
      headers: this._headers,
      body: this._stringifyData({ avatar }),
    });
  };

  getInitialCards = () => {
    return this._request(this._endpoints.cardsUrl, {
      method: "GET",
      headers: this._headers,
    });
  };

  postCard = ({ name, link }) => {
    return this._request(this._endpoints.cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: this._stringifyData({ name, link }),
    });
  };

  deleteCard = (cardId) => {
    return this._request(this._endpoints.cardsUrl + `/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  };

  likeCard(cardId) {
    return this._request(this._likesUrl(cardId), {
      method: "PUT",
      headers: this._headers,
    });
  }

  dislikeCard(cardId) {
    return this._request(this._likesUrl(cardId), {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

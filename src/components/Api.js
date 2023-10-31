export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInformation() {
    const userUrl = `${this._baseUrl}/users/me`;
    return fetch(userUrl, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  updateUserInformation({ name, about }) {
    const newBodyInfo = JSON.stringify({
      name,
      about,
    });
    const userUrl = `${this._baseUrl}/users/me`;
    return fetch(userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: newBodyInfo,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  updateAvatar({ avatar }) {
    const newAvatarInfo = JSON.stringify({
      avatar,
    });
    const avatarUrl = `${this._baseUrl}/users/me/avatar`;
    return fetch(avatarUrl, {
      method: "PATCH",
      headers: this._headers,
      body: newAvatarInfo,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  // getCard(cardId) {
  //   const cardUrl = `${this._baseUrl}/cards/${cardId}`;
  //   return fetch(cardUrl, {
  //     method: "GET",
  //     headers: this._headers,
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       return Promise.reject(`Error: ${res.status}`);
  //     })
  //     .catch((err) => console.error(err));
  // }

  getInitialCards() {
    const cardsUrl = `${this._baseUrl}/cards`;
    return fetch(cardsUrl, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  postCard({ name, link }) {
    const cardsUrl = `${this._baseUrl}/cards`;
    return fetch(cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  deleteCard(cardId) {
    const cardUrl = `${this._baseUrl}/cards/${cardId}`;
    return fetch(cardUrl, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  likeCard(cardId) {
    const likesUrl = `${this._baseUrl}/cards/${cardId}/likes`;
    return fetch(likesUrl, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  dislikeCard(cardId) {
    const likesUrl = `${this._baseUrl}/cards/${cardId}/likes`;
    return fetch(likesUrl, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }
}

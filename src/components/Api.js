const myId = {
  user: {
    name: "Jacques Cousteau",
    about: "Sailor, researcher",
    avatar:
      "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
    _id: "dc27e223c44162c29bc78a48",
  },
  token: "b1d23d4f-be22-439f-a9ab-f4f228d0169f",
};

export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserInformation() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this.headers,
    });
  }

  updateUserInformation({ name, job }) {
    const newBodyInfo = JSON.stringify({
      name,
      job,
    });
    fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: newBodyInfo,
    });
  }

  updateAvatar({ name, link }) {
    const newAvatarInfo = JSON.stringify({
      name,
      link,
    });
    fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: newAvatarInfo,
    });
  }

  getInitialCards() {
    return fetch(this.baseUrl, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  createCard({ name, link }) {
    fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard() {
    fetch(this.baseUrl + "/cards/:cardId");
  }

  likeCard() {
    fetch(this.baseUrl + "/cards/:cardId/likes");
  }

  dislikeCard() {
    fetch(this.baseUrl + "/cards/:cardId/likes");
  }
}

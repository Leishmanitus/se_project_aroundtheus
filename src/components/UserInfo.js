export default class UserInfo {
  constructor(profileSelector) {
    this._profileElement = document.querySelector(profileSelector);
    this._nameElement = this._profileElement.querySelector(".profile__name");
    this._aboutElement = this._profileElement.querySelector(".profile__about");
    this._avatarElement =
      this._profileElement.querySelector(".profile__avatar");
    // this.userInfo = data;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }

  setAvatar({ link }) {
    this._avatarElement.src = link;
    this._avatarElement.alt = this._nameElement.textContent;
  }
}

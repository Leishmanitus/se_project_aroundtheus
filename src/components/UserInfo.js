export default class UserInfo {
  constructor(profileSelector) {
    this._profileElement = document.querySelector(profileSelector);
    this._nameElement = this._profileElement.querySelector(".profile__name");
    this._jobElement = this._profileElement.querySelector(".profile__job");
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}

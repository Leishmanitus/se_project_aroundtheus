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

  setUserInfo({ nameInfo, jobInfo }) {
    this._nameElement.textContent = nameInfo;
    this._jobElement.textContent = jobInfo;
  }
}

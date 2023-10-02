export default class UserInfo {
  constructor({ name, job }) {
    this._name = name;
    this._job = job;
    this._profile = document.querySelector(".profile");
    this._userName = this._profile.querySelector(".profile__name");
    this._userJob = this._profile.querySelector(".profile__description");
    this.setUserInfo(this._name, this._job);
  }

  getUserInfo() {
    return { name: this._userName.textContent, job: this._userJob.textContent };
  }

  setUserInfo({ nameInfo, jobInfo }) {
    this._userName.textContent = nameInfo;
    this._userJob.textContent = jobInfo;
  }
}

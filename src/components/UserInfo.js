export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return { name: this._userName.textContent, job: this._userJob.textContent };
  }

  setUserInfo({ nameInfo, jobInfo }) {
    this._nameElement.textContent = nameInfo;
    this._jobElement.textContent = jobInfo;
  }
}

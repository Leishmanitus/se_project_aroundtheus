export default class UserInfo {
  constructor({
    profileSelector,
    nameSelector,
    aboutSelector,
    avatarSelector,
  }) {
    this._profileElement = document.querySelector(profileSelector);
    this._nameElement = this._profileElement.querySelector(nameSelector);
    this._aboutElement = this._profileElement.querySelector(aboutSelector);
    this._avatarElement = this._profileElement.querySelector(avatarSelector);
  }

  getUserInfo = () => {
    return {
      name: this._name,
      avatar: this._avatar,
      about: this._about,
      _id: this._id,
    };
  };

  setAllInfo = ({ name, avatar, about, _id }) => {
    this._name = name;
    this._avatar = avatar;
    this._about = about;
    this._id = _id;
    this._placeUserInfo();
    this._placeAvatar();
  };

  setUserInfo = ({ name, about, _id }) => {
    this._name = name;
    this._about = about;
    this._id = _id;
    this._placeUserInfo();
  };

  _placeUserInfo = () => {
    this._nameElement.textContent = this._name;
    this._aboutElement.textContent = this._about;
  };

  setAvatar = ({ avatar }) => {
    this._avatar = avatar;
    this._placeAvatar();
  };

  _placeAvatar = () => {
    this._avatarElement.src = this._avatar;
    this._avatarElement.alt = this._name;
  };
}

export default class Card {
  constructor(
    { name, link, _id, owner, isLiked },
    handlePreviewImage,
    handleDeleteImage,
    templateElement
  ) {
    this._title = name;
    this._link = link;
    this._id = _id;
    this._owner = owner;
    this._isLiked = isLiked;
    this._cardElement = templateElement.content.querySelector(".card");
    this._handlePreviewImage = handlePreviewImage;
    this._handleDeleteImage = handleDeleteImage;
  }

  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _likeImageToggle = () => {
    this._cardHeartButton.classList.toggle("card__heart-button_liked");
  };

  _setEventListeners = () => {
    this._cardImageElement.addEventListener("click", () => {
      const values = { title: this._title, link: this._link };
      this._handlePreviewImage(values);
    });
    this._cardDeleteElement.addEventListener("click", () => {
      this._handleDeleteImage({ deleter: this.deleteCard });
    });
    this._cardHeartButton.addEventListener("click", this._likeImageToggle);
  };

  _cloneTemplate = () => {
    const card = this._cardElement.cloneNode(true);
    return card;
  };

  _setImageValues = () => {
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._title;
    this._cardCaption.textContent = this._title;
  };

  generateCard() {
    this._element = this._cloneTemplate();
    this._cardImageElement = this._element.querySelector(".card__image");
    this._cardCaption = this._element.querySelector(".card__caption");
    this._cardDeleteElement = this._element.querySelector(
      ".card__trash-button"
    );
    this._cardHeartButton = this._element.querySelector(".card__heart-button");

    this._setImageValues();

    this._setEventListeners();

    return this._element;
  }

  getInfo() {
    return {
      name: this._title,
      link: this._link,
      _id: this._id,
      owner: this._owner,
      isLiked: this._isLiked,
    };
  }
}
export default class Card {
  constructor({ title, link }, handlePreviewImage, templateElement) {
    this._title = title;
    this._link = link;
    this._cardElement = templateElement.content.querySelector(".card");
    this._handlePreviewImage = handlePreviewImage;
  }

  _deleteCard = () => {
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
    this._cardDeleteElement.addEventListener("click", this._deleteCard);
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

  getName() {
    return this._title;
  }

  getLink() {
    return this._link;
  }
}

export default class Card {
  constructor({ name, link }, cardSelector, handlePreviewImage) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
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
    this._cardImageElement.addEventListener("click", () =>
      this._handlePreviewImage(this)
    );
    this._cardDeleteElement.addEventListener("click", this._deleteCard);
    this._cardHeartButton.addEventListener("click", this._likeImageToggle);
  };

  _cloneTemplate = () => {
    return this._cardSelector.cloneNode(true);
  };

  generateCard() {
    this._element = this._cloneTemplate();
    this._cardImageElement = this._element.querySelector(".card__image");
    this._cardCaption = this._element.querySelector(".card__caption");
    this._cardDeleteElement = this._element.querySelector(
      ".card__trash-button"
    );
    this._cardHeartButton = this._element.querySelector(".card__heart-button");

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardCaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  getName() {
    return this._name;
  }

  getLink() {
    return this._link;
  }
}

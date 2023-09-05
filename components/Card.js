export default class Card {
  constructor({ name, link }, cardSelector, handlePreviewImage) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handlePreviewImage = handlePreviewImage;
  }

  _deleteCard() {
    this._element.remove();
  }

  _likeImageToggle() {
    this._cardHeartButton.classList.toggle("card__heart-button_liked");
  }

  _setEventListeners() {
    this._cardImageElement.addEventListener("click", () =>
      this._handlePreviewImage(this)
    );
    this._cardDeleteElement.addEventListener("click", () => this._deleteCard());
    this._cardHeartButton.addEventListener("click", () =>
      this._likeImageToggle()
    );
  }

  _getTemplate() {
    return this._cardSelector.cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImageElement = this._element.querySelector(".card__image");
    this._cardCaption = this._element.querySelector(".card__caption");
    this._cardDeleteElement = this._element.querySelector(
      ".card__trash-button"
    );
    this._cardHeartButton = this._element.querySelector(".card__heart-button");

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardCaption.textContent = this._name;

    this._setEventListeners(this);

    return this._element;
  }

  getName() {
    return this._name;
  }

  getLink() {
    return this._link;
  }
}

//delete later
const makeImage = (link, title) => {
  modalViewImage.src = link;
  modalViewImage.alt = title;
  modalViewCaption.textContent = title;
};

const makeCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  const newCaption = newCard.querySelector(".card__caption");
  const newTrashButton = newCard.querySelector(".card__trash-button");
  const newHeartButton = newCard.querySelector(".card__heart-button");
  newImage.addEventListener("click", () => {
    const imageLink = newImage.src;
    const imageTitle = newCaption.textContent;
    makeImage(imageLink, imageTitle);
    openPopup(modalView);
  });
  newTrashButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    event.target.closest(".card").remove();
  });
  newHeartButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    newHeartButton.classList.toggle("card__heart-button_liked");
  });
  newImage.src = card.link;
  newImage.alt = card.name;
  newCaption.textContent = card.name;
  return newCard;
};

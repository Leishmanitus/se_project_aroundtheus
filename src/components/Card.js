export default class Card {
  constructor(
    { name, link, _id, owner, isLiked },
    handlePreviewImage,
    handleDeleteCard,
    handleLike,
    templateElement
  ) {
    this._title = name;
    this._link = link;
    this._id = _id;
    this._owner = owner;
    this._isLiked = isLiked;
    this._cardElement = templateElement.content.querySelector(".card");
    this._handlePreviewImage = handlePreviewImage;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLike = handleLike;
  }

  deleteCard = () => {
    this._removeEventListeners();
    this._element.remove();
    this._element = null;
  };

  _setEventListeners = () => {
    this._cardImageElement.addEventListener("click", this._previewImage);
    this._cardDeleteElement.addEventListener("click", this._handleDeleteCard);
    this._cardLikeButton.addEventListener("click", this._handleLikeStatus);
  };

  _removeEventListeners = () => {
    this._cardImageElement.removeEventListener("click", this._previewImage);
    this._cardDeleteElement.removeEventListener(
      "click",
      this._handleDeleteCard
    );
    this._cardLikeButton.removeEventListener("click", this._handleLikeStatus);
  };

  removeDeleteListener = () => {
    this._cardDeleteElement.removeEventListener(
      "click",
      this._handleDeleteCard
    );
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

  _setLikeStatus = () => {
    if (this._isLiked) {
      this.likeCard();
    } else {
      this.dislikeCard();
    }
  };

  _handleLikeStatus = () => {
    this._handleLike({ isLiked: this._isLiked, _id: this._id });
  };

  likeCard = () => {
    this._cardLikeButton.classList.add("card__heart-button_liked");
    this._isLiked = true;
  };

  dislikeCard = () => {
    this._cardLikeButton.classList.remove("card__heart-button_liked");
    this._isLiked = false;
  };

  _previewImage = () => {
    this._handlePreviewImage(this._title, this._link);
  };

  generateCard = () => {
    this._element = this._cloneTemplate();
    this._cardImageElement = this._element.querySelector(".card__image");
    this._cardCaption = this._element.querySelector(".card__caption");
    this._cardDeleteElement = this._element.querySelector(
      ".card__trash-button"
    );
    this._cardLikeButton = this._element.querySelector(".card__heart-button");

    this._setLikeStatus();

    this._setImageValues();

    this._setEventListeners();

    return this._element;
  };

  getInfo = () => {
    return {
      name: this._title,
      link: this._link,
      _id: this._id,
      owner: this._owner,
      isLiked: this._isLiked,
    };
  };
}

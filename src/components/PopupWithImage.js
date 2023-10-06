import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(".modal__image");
    this._caption = this._popupElement.querySelector(".modal__caption");
  }

  setSource(link, name) {
    this._image.src = link;
    this._caption.textContent = name;
  }

  open(handleSource) {
    this._handleSource = handleSource;
    super.open();
    this._handleSource(this._image, this._caption);
  }
}

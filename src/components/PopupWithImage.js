import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(".modal__image");
    this._caption = this._popupElement.querySelector(".modal__caption");
  }

  setSource({ title, link }) {
    this._image.src = link;
    this._image.alt = title;
    this._caption.textContent = title;
  }

  open({ title, link }) {
    super.open();
    this.setSource(title, link);
  }
}

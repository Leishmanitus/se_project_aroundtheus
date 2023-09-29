import Popup from "./Popup.js";
import { popupData } from "../globals/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, handleSource) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(popupData.imageSelector);
    this._caption = this._popupElement.querySelector(popupData.captionSelector);
    this._handleSource = handleSource;
  }

  open() {
    super.open();
    this._handleSource();
  }
}

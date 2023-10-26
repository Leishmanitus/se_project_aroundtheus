import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleDelete) {
    super({ popupSelector });
    this._confirmElement = this._popupElement.querySelector(".form");
    this._handleDelete = handleDelete;
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this._handleDelete(event);
    //put deleter in here
  };

  open(deleter) {
    super.open();
    this._deleter = deleter;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmElement.addEventListener("submit", this._handleSubmit);
  }

  deleteEventListeners() {
    super.deleteEventListeners();
    this._confirmElement.removeEventListener("submit", this._handleSubmit);
  }
}

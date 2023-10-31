import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleDelete) {
    super({ popupSelector });
    this._confirmElement = this._popupElement.querySelector(".form");
    this._handleDelete = handleDelete;
  }

  _handleSubmit = () => {
    this._handleDelete(this._data);
  };

  open = ({ deleter, _id }) => {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
    this._data = { deleter, _id };
  };

  setEventListeners() {
    super.setEventListeners();
    this._confirmElement.addEventListener("click", this._handleSubmit);
  }

  deleteEventListeners = () => {
    super.deleteEventListeners();
    this._confirmElement.removeEventListener("click", this._handleSubmit);
  };
}

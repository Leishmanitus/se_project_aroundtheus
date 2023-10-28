import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleDelete) {
    super({ popupSelector });
    this._confirmElement = this._popupElement.querySelector(".form");
    this._handleDelete = handleDelete;
  }

  _handleSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    this._handleDelete(data);
  };

  open = ({ deleter, _id }) => {
    super.open();
    console.log(deleter, _id);
    this._confirmElement.addEventListener("click", () =>
      this._handleSubmit({ deleter, _id })
    );
  };

  deleteEventListeners = () => {
    super.deleteEventListeners();
    this._confirmElement.removeEventListener("click", this._handleSubmit);
  };
}

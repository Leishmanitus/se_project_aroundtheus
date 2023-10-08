export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    this.deleteEventListeners();
  }

  _handleEscapeClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleClose = (event) => {
    if (
      event.target.classList.contains("modal__close-button") ||
      event.target.classList.contains("modal_opened")
    ) {
      this.close();
    }
  };

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popupElement.addEventListener("click", this._handleClose);
  }

  deleteEventListeners() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    this._popupElement.removeEventListener("click", this._handleClose);
  }
}

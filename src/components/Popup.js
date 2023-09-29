export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscapeClose(event) {
    if (event.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      if (openedModal) {
        this.close();
      }
    }
  }

  setEventListeners() {
    document.setEventListeners("keyup", (event) =>
      this._handleEscapeClose(event)
    );
    this._popupElement
      .querySelector(".modal__close-button")
      .setEventListeners("click", () => this.close());
  }
}

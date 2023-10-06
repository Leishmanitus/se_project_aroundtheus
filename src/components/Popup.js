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

  // _handleRemoteClick = (event) => {
  //   if (
  //     event.currentTarget === event.target ||
  //     !event.target.classList.contains("modal_opened")
  //   ) {
  //     this.close(event.target);
  //   }
  // };

  setEventListeners() {
    document.addEventListener("keyup", (event) => {
      this._handleEscapeClose(event);
    });

    this._popupElement.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("modal__close-button") ||
        event.target.classList.contains("modal_opened")
      ) {
        this.close();
      }
    });
  }
}

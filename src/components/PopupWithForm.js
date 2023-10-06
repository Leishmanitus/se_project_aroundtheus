import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputObject = {};
    const index = 0;
    this._popupForm
      .querySelectorAll(".form__input")
      .array.forEach((inputElement) => {
        inputObject[index] = inputElement.value;
        index++;
      });
    return inputObject;
  }

  setInputValues(newValues) {
    const values = this._popupForm.querySelectorAll(".form__input");
    values.forEach((item) => {
      newValues.forEach((newItem) => {
        item.value = newItem;
      });
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}

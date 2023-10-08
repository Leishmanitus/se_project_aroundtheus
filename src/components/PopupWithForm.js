import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputList = [...this._popupForm.querySelectorAll(".form__input")];
    const inputObject = {};
    for (const input of inputList) {
      inputObject[input.name] = input.value;
    }
    return inputObject;
  }

  setInputValues = (inputValues) => {
    const inputElements = [...this._popupForm.querySelectorAll(".form__input")];
    inputElements.forEach((inputElement, index) => {
      inputElement.value = inputValues[index];
    });
  };

  resetForm() {
    this._popupForm.reset();
  }

  _handleSubmit = (event) => {
    const values = this._getInputValues();

    event.preventDefault();
    this._handleFormSubmit(values);
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  }

  deleteEventListeners() {
    super.deleteEventListeners();
    this._popupForm.removeEventListener("submit", this._handleSubmit);
  }
}

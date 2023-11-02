import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".form");
    this._submitButton = this._popupForm.querySelector(".form__submit");
    this._submitButtonText = this._submitButton.textContent;
    this._inputs = [...this._popupForm.querySelectorAll(".form__input")];
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues = () => {
    const inputObject = {};
    for (const input of this._inputs) {
      inputObject[input.name] = input.value;
    }
    return inputObject;
  };

  setInputValues = (inputValues) => {
    this._inputs.forEach((inputElement, index) => {
      inputElement.value = inputValues[index];
    });
  };

  resetForm = () => {
    this._popupForm.reset();
  };

  _handleSubmit = (event) => {
    event.preventDefault();

    this._handleFormSubmit(this._getInputValues());
  };

  renderSaving = (isSaving, loadingText = "Saving...") => {
    if (isSaving) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  };

  deleteEventListeners = () => {
    super.deleteEventListeners();
    this._popupForm.removeEventListener("submit", this._handleSubmit);
  };
}

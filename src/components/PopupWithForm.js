import Popup from "./Popup.js";
import { formData } from "../globals/constants.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(formData.formSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputObject = {};
    const index = 0;
    this._popupForm
      .querySelectorAll(formData.inputSelector)
      .array.forEach((inputElement) => {
        inputObject[index] = inputElement.value;
        index++;
      });
    return inputObject;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.setEventListeners("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
}

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    let inputObject = {};
    let index = 0;
    const inputKeys = ["name", "link"];
    this._popupForm.querySelectorAll(".form__input").forEach((inputElement) => {
      inputObject[inputKeys[index]] = inputElement.value;
      index++;
    });
    return inputObject;
  }

  setInputValues(inputValues) {
    const inputElements = [...this._popupForm.querySelectorAll(".form__input")];
    let index = 0;
    inputElements.forEach((inputElement) => {
      inputElement.value = inputValues[index];
      index++;
    });
    console.log(inputElements);
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

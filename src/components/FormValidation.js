export default class FormValidation {
  constructor(formSelector, data) {
    this._data = data;
    this._formElement = document.forms[formSelector];
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._data.inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(".form__submit");
  }

  _checkValidity(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    if (!inputElement.validity.valid) {
      this._showError(inputElement, errorElement);
    } else {
      this._hideError(inputElement, errorElement);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmit();
    } else {
      this.enableSubmit();
    }
  }

  _setEventListeners() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorVisibleClass);
  }

  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._data.errorVisibleClass);
  }

  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //for use by add image form
  enableSubmit() {
    this._submitButton.classList.remove(this._data.inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  disableSubmit() {
    this._submitButton.classList.add(this._data.inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputElements.forEach((inputElement) => {
      this._checkValidity(inputElement);
    });
  }

  //call from within the opened form
  enableValidation() {
    this._setEventListeners();
  }
}

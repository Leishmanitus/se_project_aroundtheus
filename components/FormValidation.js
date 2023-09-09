export default class FormValidation {
  constructor(data, formElement) {
    this._data = data;
    this._formElement = formElement;
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._data.inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(
      this._data.submitButtonSelector
    );
  }

  _checkValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
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

  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorVisibleClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._data.errorVisibleClass);
  }

  resetForm() {
    this._formElement.reset;
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

  //call from within the opened form
  enableValidation() {
    this._formElement.addEventListener("submit", (event) =>
      event.preventDefault()
    );
    this._setEventListeners();
  }
}

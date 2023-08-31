const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClassVisible: "form__error_visible",
};

const showError = (
  formElement,
  inputElement,
  { inputErrorClass, errorClassVisible }
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClassVisible);
};

const hideError = (
  formElement,
  inputElement,
  { inputErrorClass, errorClassVisible }
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClassVisible);
};

const hasInvalidInput = (inputElements) => {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (
  inputElements,
  submitButton,
  { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputElements)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
  return;
};

const checkValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, options);
    return;
  }
  hideError(formElement, inputElement, options);
  return;
};

const setEventListeners = (formElement, options) => {
  const { inputSelector } = options;
  const { submitButtonSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
};

const enableValidation = (options) => {
  const { formSelector } = options;
  const formElements = [...document.querySelectorAll(formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement, options);
  });
};

enableValidation(config);

import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { initCards, selectorData } from "../globals/constants.js";

//search DOM
//profile constants
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
const profileDescription = profile.querySelector(".profile__description");
const newImageButton = profile.querySelector(".profile__button_type_add");

//card constants
const cardContainer = document.querySelector(".page__cards");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//form constants
const forms = [...document.forms];

const editForm = document.forms["profile-edit-form"];
const editModal = editForm.closest(".modal");
const formName = editForm.querySelector("#form-name");
const formDescription = editForm.querySelector("#form-description");

const imageForm = document.forms["image-add-form"];
const imageModal = imageForm.closest(".modal");
const formTitle = imageForm.querySelector("#form-title");
const formLink = imageForm.querySelector("#form-link");

//image view constants
const modalView = document.querySelector(".view");
const modalViewImage = modalView.querySelector(".view__image");
const modalViewCaption = modalView.querySelector(".view__caption");

//close buttons
const editCloseButton = editModal.querySelector(".modal__close-button");
const imageCloseButton = imageModal.querySelector(".modal__close-button");
const viewCloseButton = modalView.querySelector(".modal__close-button");

//form validators
const editFormValidator = createValidator(selectorData, editForm);
const imageFormValidator = createValidator(selectorData, imageForm);

//declare functions
const openPopup = (popup) => {
  popup.classList.add("modal_opened");
};

const closePopup = (popup) => {
  popup.classList.remove("modal_opened");
  // document.removeEventListener("keydown", handleEscapeKey);
};

const handleRemoteClick = (event) => {
  if (
    event.target == event.currentTarget ||
    !event.target.classList.contains("modal_opened")
  ) {
    closePopup(event.target);
  }
};

const setEditListeners = () => {
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    profileName.textContent = formName.value;
    profileDescription.textContent = formDescription.value;
    closePopup(editModal);
    editFormValidator.resetForm();
  });
  editModal.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
  editCloseButton.addEventListener("click", () => closePopup(editModal));
};

const setImageListeners = () => {
  imageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardInfo = {
      name: formTitle.value,
      link: formLink.value,
    };
    cardContainer.prepend(createCard(cardInfo));
    closePopup(imageModal);
    imageFormValidator.resetForm();
    imageFormValidator.disableSubmit();
  });
  imageModal.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
  imageCloseButton.addEventListener("click", () => closePopup(imageModal));
};

const setViewListeners = () => {
  modalView.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
  viewCloseButton.addEventListener("click", clearPreview);
};

const handleEscapeKey = (event) => {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closePopup(openedModal);
    }
  }
};

const previewImage = (element) => {
  modalViewImage.src = element.getLink();
  modalViewImage.alt = element.getName();
  modalViewCaption.textContent = element.getName();
  openPopup(modalView);
};

const clearPreview = () => {
  closePopup(modalView);
  modalViewImage.src = "";
  modalViewImage.alt = "";
  modalViewCaption.textContent = "";
};

function createValidator(selectorData, form) {
  const validator = new FormValidation(selectorData, form);
  return validator;
}

function createCard(card) {
  return new Card(card, cardTemplate, previewImage).generateCard();
}

//add event listeners
document.addEventListener("keydown", handleEscapeKey);

editButton.addEventListener("click", () => {
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  openPopup(editModal);
  editFormValidator.enableSubmit();
  editFormValidator.enableValidation();
});

newImageButton.addEventListener("click", () => {
  openPopup(imageModal);
  imageFormValidator.enableValidation();
});

//make a Card class for each card data item and display cards to the page
initCards.forEach((card) => {
  cardContainer.prepend(createCard(card));
});

//call functions on start
setEditListeners();
setImageListeners();
setViewListeners();

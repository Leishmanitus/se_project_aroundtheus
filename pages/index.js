import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";

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
// const submitEditButton = editForm.querySelector(".form__save-button");

const imageForm = document.forms["image-add-form"];
const imageModal = imageForm.closest(".modal");
const formTitle = imageForm.querySelector("#form-title");
const formLink = imageForm.querySelector("#form-link");
// const addImageButton = imageForm.querySelector(".form__save-button");

//image view constants
const modalView = document.querySelector(".view");
const modalViewImage = modalView.querySelector(".view__image");
const modalViewCaption = modalView.querySelector(".view__caption");

//close buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

const selectorData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorVisibleClass: "form__error_visible",
};

const initCards = [
  {
    name: "Great Cormorant",
    link: "./images/great-cormorant.jpg",
  },
  {
    name: "Kingfisher",
    link: "./images/kingfisher.jpg",
  },
  {
    name: "Green Parakeet",
    link: "./images/green-parakeet.jpg",
  },
  {
    name: "Pelican",
    link: "./images/pelican.jpg",
  },
  {
    name: "Black Crow",
    link: "./images/crow.jpg",
  },
  {
    name: "Canada Goose",
    link: "./images/canada-goose.jpg",
  },
];

const createValidator = (selectorData, form) => {
  const validator = new FormValidation(selectorData, form);
  return validator;
};

//make a class of each form validation object
forms.forEach((form) => {
  const validator = createValidator(selectorData, form);
  validator.enableValidation();
});

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
    event.target.reset();
    event.stopPropagation();
  });
  editModal.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
};

const setImageListeners = () => {
  imageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardInfo = {
      name: formTitle.value,
      link: formLink.value,
    };
    cardContainer.prepend(
      new Card(cardInfo, cardTemplate, previewImage).generateCard()
    );
    closePopup(imageModal);
    event.target.reset();
    event.stopPropagation();
  });
  imageModal.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
};

const setViewListeners = () => {
  modalView.addEventListener("mousedown", (event) => {
    handleRemoteClick(event);
  });
};

const handleEscapeKey = (event) => {
  const openedModal = document.querySelector(".modal_opened");
  if (event.key === "Escape") {
    closePopup(openedModal);
  }
};

const openPopup = (popup) => {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscapeKey);
};

const closePopup = (popup) => {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscapeKey);
};

const previewImage = (element) => {
  modalViewImage.src = element.getLink();
  modalViewImage.alt = element.getName();
  modalViewCaption.textContent = element.getName();
  openPopup(modalView);
};

editButton.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  openPopup(editModal);
});

newImageButton.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  openPopup(imageModal);
});

//make a Card class for each card data item and display cards to the page
initCards.forEach((card) => {
  const newCard = new Card(card, cardTemplate, previewImage);
  cardContainer.prepend(newCard.generateCard());
});

//set a listener on each close button
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    closePopup(popup);
  });
});

setEditListeners();
setImageListeners();
setViewListeners();
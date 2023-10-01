import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import {
  initCards,
  formData,
  userData,
  popupData,
} from "../globals/constants.js";
import UserInfo from "../components/UserInfo";
import { data } from "autoprefixer";

//search DOM
//profile constants
const profile = document.querySelector(".profile");
// const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
// const profileDescription = profile.querySelector(".profile__description");
const cardButton = profile.querySelector(".profile__button_type_add");

// //card constants
// const cardContainer = document.querySelector(".page__cards");
// const cardTemplate = document
//   .querySelector("#card-template")
//   .content.querySelector(".card");

// //form constants
// const forms = [...document.forms];

// const editForm = document.forms["profile-edit-form"];
// const editModal = editForm.closest(".modal");
// const formName = editForm.querySelector("#form-name");
// const formDescription = editForm.querySelector("#form-description");

// const imageForm = document.forms["image-add-form"];
// const imageModal = imageForm.closest(".modal");
// const formTitle = imageForm.querySelector("#form-title");
// const formLink = imageForm.querySelector("#form-link");

// //image view constants
// const modalView = document.querySelector(".view");
// const modalViewImage = modalView.querySelector(".view__image");
// const modalViewCaption = modalView.querySelector(".view__caption");

// //close buttons
// const editCloseButton = editModal.querySelector(".modal__close-button");
// const imageCloseButton = imageModal.querySelector(".modal__close-button");
// const viewCloseButton = modalView.querySelector(".modal__close-button");

//create objects
const profileInfo = new UserInfo({ name: userData.name, job: userData.job });
// profileInfo.setUserInfo(profileInfo.getUserInfo());

const cardList = new Section(
  {
    data: initCards,
    renderer: (item) => {
      const card = new Card(item, () => {
        const preview = new PopupWithImage(
          { selector: popupData.previewPopupSelector },
          () => {
            this._image.src = card.getLink();
            this._caption.textContent = card.getName();
          }
        );
        preview.open();
      });
      cardList.addItem(card.generateCard());
    },
  },
  formData.containerSelector
);

const editPopup = new PopupWithForm(popupData.editPopupSelector, () => {});
const cardPopup = new PopupWithForm(popupData.cardPopupSelector, () => {});

//form validators
// const editFormValidator = new FormValidation(formData.editFormId);
// editFormValidator.enableValidation();
// const cardFormValidator = new FormValidation(formData.cardFormId);
// cardFormValidator.enableValidation();

// function previewImage(title, src) {
//   const imagePopup = new PopupWithImage(
//     formData.imagePreview,
//     ({ title, src }) => {
//       this._image.src = src;
//       this._caption.textContent = title;
//     }
//   );
//   return imagePopup;
// }

// const openPopup = (popup) => {
//   popup.classList.add("modal_opened");
//   document.addEventListener("keydown", (event) => handleEscapeKey(event));
// };

// const closePopup = (popup) => {
//   popup.classList.remove("modal_opened");
//   document.removeEventListener("keydown", (event) => handleEscapeKey(event));
// };

// const handleRemoteClick = (event) => {
//   if (
//     event.target == event.currentTarget ||
//     !event.target.classList.contains("modal_opened")
//   ) {
//     closePopup(event.target);
//   }
// };

// const setEditListeners = () => {
//   editForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     profileName.textContent = formName.value;
//     profileDescription.textContent = formDescription.value;
//     event.target.reset();
//     closePopup(editModal);
//   });
//   editModal.addEventListener("mousedown", (event) => {
//     handleRemoteClick(event);
//   });
//   editCloseButton.addEventListener("click", () => closePopup(editModal));
// };

// const setImageListeners = () => {
//   imageForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const cardInfo = {
//       name: formTitle.value,
//       link: formLink.value,
//     };
//     cardContainer.prepend(createCard(cardInfo));
//     event.target.reset();
//     imageFormValidator.disableSubmit();
//     closePopup(imageModal);
//   });
//   imageModal.addEventListener("mousedown", (event) => {
//     handleRemoteClick(event);
//   });
//   imageCloseButton.addEventListener("click", () => closePopup(imageModal));
// };

// const setViewListeners = () => {
//   modalView.addEventListener("mousedown", (event) => {
//     handleRemoteClick(event);
//   });
//   viewCloseButton.addEventListener("click", clearPreview);
// };

// const handleEscapeKey = (event) => {
//   if (event.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     if (openedModal) {
//       closePopup(openedModal);
//     }
//   }
// };

// const previewImage = (element) => {
//   modalViewImage.src = element.getLink();
//   modalViewImage.alt = element.getName();
//   modalViewCaption.textContent = element.getName();
//   openPopup(modalView);
// };

// const clearPreview = () => {
//   closePopup(modalView);
//   modalViewImage.src = "";
//   modalViewImage.alt = "";
//   modalViewCaption.textContent = "";
// };

//add event listeners
editButton.addEventListener("click", () => {
  editFormValidator.resetValidation([formName, formDescription]);
  profileInfo.getUserInfo();
  editPopup.open();
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//make a Card class for each card data item and display cards to the page
// initCards.forEach((card) => {
//   cardContainer.prepend(createCard(card));
// });

//call functions on start
cardList.renderItems();
// setEditListeners();
// setImageListeners();
// setViewListeners();

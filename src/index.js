import "./pages/index.css";
import PopupWithForm from "./components/PopupWithForm";
import PopupWithImage from "./components/PopupWithImage";
import Section from "./components/Section";
import Card from "./components/Card.js";
import FormValidation from "./components/FormValidation.js";
import {
  initCards,
  formData,
  userData,
  popupData,
} from "./globals/constants.js";
import UserInfo from "./components/UserInfo";

// const cardData = {
//   containerSelector: ".page__cards",
//   cardSelector: ".card",
//   templateId: "#card-template",
// };

//search DOM
//profile constants
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");

const templateElement = document.querySelector(".template");

//create objects
const profileSection = new Section({
  data: userData,
  renderer: (item) => {
    new UserInfo(item.name, item.job);
    profileSection.renderItems();
  },
});
// profileInfo.setUserInfo(profileInfo.getUserInfo());

const cardList = new Section(
  {
    data: initCards,
    renderer: (item) => {
      const card = new Card(
        item,
        () => {
          const preview = new PopupWithImage(
            { selector: popupData.previewPopupSelector },
            () => {
              this._image.src = card.getLink();
              this._caption.textContent = card.getName();
            }
          );
          preview.open();
        },
        templateElement
      );
      cardList.addItem(card.generateCard());
    },
  },
  ".page__cards"
);

const editPopup = new PopupWithForm(popupData.editPopupSelector, () => {});
const cardPopup = new PopupWithForm(popupData.cardPopupSelector, () => {});

// form validators
// const editFormValidator = new FormValidation(formData.editFormId);
// editFormValidator.enableValidation();
// const cardFormValidator = new FormValidation(formData.cardFormId);
// cardFormValidator.enableValidation();

// const handleRemoteClick = (event) => {
//   if (
//     event.target == event.currentTarget ||
//     !event.target.classList.contains("modal_opened")
//   ) {
//     closePopup(event.target);
//   }
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

//call on start
cardList.renderItems();

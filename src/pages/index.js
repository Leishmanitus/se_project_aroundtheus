import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { initCards, formData } from "../utils/constants.js";
import UserInfo from "../components/UserInfo";

//search DOM
//profile constants
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");

const templateElement = document.querySelector(".template");

// const allForms = [...document.forms];

const userData = {
  name: ".profile__name",
  job: ".profile__job",
};

//create objects
//profile section
const userInformation = new UserInfo(userData);

//edit form
const editPopup = new PopupWithForm(".modal_type_edit", () => {});
editPopup.setEventListeners();

const editFormValidator = new FormValidation("profile-edit-form", formData);
editFormValidator.enableValidation();

editButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  editPopup.setInputValues([...userInformation.getUserInfo()]);
  editPopup.open();
});

//card form
const cardPopup = new PopupWithForm(".modal_type_card", () => {});
cardPopup.setEventListeners();

const cardFormValidator = new FormValidation("card-add-form", formData);
cardFormValidator.enableValidation();

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//form validators
// const formValidators = new Section({
//   data: allForms,
//   renderer: (item) => {
//     console.log(item.name);
//     const validator = new FormValidation(item);
//     validator.enableValidation;
//   },
// });
// formValidators.renderItems();

//preview image
const previewPopup = new PopupWithImage(".modal_type_preview");
previewPopup.setEventListeners();

//cards section
const cardList = new Section(
  {
    data: initCards,
    renderer: (item) => {
      const card = new Card(
        item,
        () => {
          previewPopup.open((image, caption) => {
            image.src = item.link;
            caption.textContent = item.name;
          });
        },
        templateElement
      );
      cardList.addItem(card.generateCard());
    },
  },
  ".page__cards"
);
{
  cardList.clear();
  cardList.renderItems();
}

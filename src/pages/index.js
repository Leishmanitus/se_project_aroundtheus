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

// const userData = {
//   name: ".profile__name",
//   job: ".profile__job",
// };

//create objects
//profile section
const userInformation = new UserInfo(".profile");

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

//edit form
const editPopup = new PopupWithForm(".modal_type_edit", (inputValues) => {
  userInformation.setUserInfo(inputValues);
});
editPopup.setEventListeners();

const editFormValidator = new FormValidation("profile-edit-form", formData);
editFormValidator.enableValidation();

editButton.addEventListener("click", () => {
  const newValues = userInformation.getUserInfo();
  editPopup.setInputValues(Object.values(newValues));
  editFormValidator.resetValidation();
  editPopup.open();
});

//card form
const cardPopup = new PopupWithForm(".modal_type_card", (inputValues) => {
  const card = new Card(
    inputValues,
    (values) => {
      const { name, link } = values;
      const newImage = new URL(link, import.meta.url);
      previewPopup.open((image, caption) => {
        image.src = newImage;
        caption.textContent = name;
      });
    },
    templateElement
  );
  cardList.addItem(card.generateCard());
});
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

{
  cardList.clear();
  cardList.renderItems();
}

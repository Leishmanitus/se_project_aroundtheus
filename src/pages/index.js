import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { initCards, formData } from "../utils/constants.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";

//search DOM
//profile constants
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");

const templateElement = document.querySelector(".template");

// functions
const renderCard = (item) => {
  const card = new Card(
    item,
    ({ title, link }) => {
      previewPopup.open(title, link);
    },
    templateElement
  );

  cardList.addItem(card.generateCard());
};

//create objects
//profile section
const userInformation = new UserInfo(".profile");

//cards section
const cardList = new Section(
  {
    data: initCards,
    renderer: renderCard,
  },
  ".page__cards"
);

//edit form
const editFormValidator = new FormValidation("profile-edit-form", formData);
editFormValidator.enableValidation();

const editPopup = new PopupWithForm(".modal_type_edit", (values) => {
  userInformation.setUserInfo(values);
  editFormValidator.disableSubmit();
  editPopup.close();
});

editButton.addEventListener("click", () => {
  const newValues = userInformation.getUserInfo();
  editPopup.setInputValues(Object.values(newValues));
  editPopup.open();
});

//card form
const cardFormValidator = new FormValidation("card-add-form", formData);
cardFormValidator.enableValidation();

const cardPopup = new PopupWithForm(".modal_type_card", (values) => {
  renderCard(values);
  cardFormValidator.disableSubmit();
  cardPopup.resetForm();
  cardPopup.close();
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//preview image
const previewPopup = new PopupWithImage(".modal_type_preview");

const confirmPopup = new Popup(".modal_type_confirm");

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "845334f8-31bb-491e-8a36-b67d1543baac",
    "Content-Type": "application/json",
  },
});

api.getUserInformation();

cardList.clear();
cardList.renderItems();

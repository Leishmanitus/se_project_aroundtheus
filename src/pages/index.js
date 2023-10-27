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
const profile = document.querySelector(".page__profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");
const avatarButton = profile.querySelector(".profile__avatar-edit");

const templateElement = document.querySelector(".template");

// utility functions
const renderCard = (item) => {
  const card = new Card(
    item,
    ({ name, link, _id, owner, isLiked }) => {
      previewPopup.open({ title: name, link, _id, owner, isLiked });
    },
    ({ deleter }) => {
      confirmPopup.open(deleter);
    },
    templateElement
  );

  cardList.addItem(card.generateCard());
};

//create objects
//api
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7ff811c0-9f09-42c2-975e-cca434c12992",
    "content-type": "application/json",
  },
});

//profile section
const userInfo = new UserInfo(".profile");
api.getUserInformation().then((data) => {
  const { name, avatar, about, _id } = data;
  userInfo.setAllInfo({ name, avatar, about, _id });
});
// const userData = api.getUserInformation().then((item) => {
//   var item = item;
// });
// const profileSection = new Section(
//   {
//     data: userData.item,
//     renderer: ({ name, avatar, about, _id }) => {
//       userInfo.setAllInfo({
//         name: name,
//         avatar: avatar,
//         about: about,
//         _id: _id,
//       });
//     },
//   },
//   ".profile"
// );

//cards section
const cardList = new Section(
  {
    data: () => api.getInitialCards().then((items) => items),
    renderer: renderCard,
  },
  ".page__cards"
);

//edit form
const editFormValidator = new FormValidation("edit", formData);
editFormValidator.enableValidation();

const editPopup = new PopupWithForm(".modal_type_edit", (values) => {
  api.updateUserInformation(values).then((values) => {
    console.log(values);
    userInfo.setUserInfo(values);
    editFormValidator.disableSubmit();
    editPopup.close();
  });
});

editButton.addEventListener("click", () => {
  const newValues = userInfo.getUserInfo();
  editPopup.setInputValues(Object.values(newValues));
  editPopup.open();
});

//card form
const cardFormValidator = new FormValidation("card", formData);
cardFormValidator.enableValidation();

const cardPopup = new PopupWithForm(".modal_type_card", (values) => {
  api.postCard(values).then((values) => {
    console.log(values);
    renderCard(values);
    cardFormValidator.disableSubmit();
    cardPopup.resetForm();
    cardPopup.close();
  });
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//edit avatar form
const avatarFormValidator = new FormValidation("avatar", formData);
avatarFormValidator.enableValidation();

const editAvatarPopup = new PopupWithForm(".modal_type_avatar", (values) => {
  api.updateAvatar(values).then((values) => {
    console.log(values);
    userInfo.setUserInfo(values);
    avatarFormValidator.disableSubmit();
    editAvatarPopup.resetForm();
    editAvatarPopup.close();
  });
});

avatarButton.addEventListener("click", () => editAvatarPopup.open());

//preview image popup
const previewPopup = new PopupWithImage(".modal_type_preview");

//confirmation popup
const confirmPopup = new PopupWithForm(".modal_type_confirm", () => {});

// call everything down here <----------
cardList.clear();
// profileSection.renderItems();
cardList.renderItems();

initCards.forEach(({ name, link }) => {
  api.postCard({ name, link });
});

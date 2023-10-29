import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { formData } from "../utils/constants.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";

//search DOM
//profile constants
const profile = document.querySelector(".page__profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");
const avatarButton = profile.querySelector(".profile__avatar-edit");

//template constant
const templateElement = document.querySelector(".template");

// utility functions
const renderCard = (item) => {
  const card = new Card(
    item,
    (title, link) => {
      previewPopup.open({ name: title, link: link });
    },
    () => {
      confirmPopup.open({ deleter: card.deleteCard, _id: card.getInfo()._id });
    },
    (isLiked, cardId) => {
      card.toggleLike();
      if (isLiked) {
        api.likeCard(cardId);
      } else {
        api.dislikeCard(cardId);
      }
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
    "Access-Control-Allow-Origin": "*",
  },
});

//profile section
const userInfo = new UserInfo(".profile");

const profileSection = new Section(
  {
    renderer: () => {
      api.getUserInformation().then(({ name, avatar, about, _id }) => {
        userInfo.setAllInfo({
          name: name,
          avatar: avatar,
          about: about,
          _id: _id,
        });
      });
    },
  },
  ".profile"
);

//cards section
const cardList = new Section(
  {
    renderer: () => {
      api.getInitialCards().then((items) => {
        items.forEach((item) => {
          renderCard(item);
        });
      });
    },
  },
  ".page__cards"
);

//edit form
const editFormValidator = new FormValidation("edit", formData);
editFormValidator.enableValidation();

const editPopup = new PopupWithForm(".modal_type_edit", (values) => {
  editPopup.toggleSaving();
  api.updateUserInformation(values).then((values) => {
    userInfo.setUserInfo(values);
    editPopup.close();
    editPopup.toggleSaving();
  });
});

editButton.addEventListener("click", () => {
  const newValues = userInfo.getUserInfo();
  editPopup.setInputValues([newValues.name, newValues.about]);
  editFormValidator.resetValidation();
  editPopup.open();
});

//card form
const cardFormValidator = new FormValidation("card", formData);
cardFormValidator.enableValidation();

const cardPopup = new PopupWithForm(".modal_type_card", ({ title, link }) => {
  const values = { name: title, link: link };
  cardPopup.toggleSaving();
  api.postCard(values).then((values) => {
    renderCard(values);
    cardFormValidator.disableSubmit();
    cardPopup.resetForm();
    cardPopup.close();
    cardPopup.toggleSaving();
  });
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//edit avatar form
const avatarFormValidator = new FormValidation("avatar", formData);
avatarFormValidator.enableValidation();

const editAvatarPopup = new PopupWithForm(".modal_type_avatar", (values) => {
  editAvatarPopup.toggleSaving();
  api.updateAvatar(values).then(({ name, link }) => {
    userInfo.setAvatar({ name, link });
    avatarFormValidator.disableSubmit();
    editAvatarPopup.resetForm();
    editAvatarPopup.close();
    editAvatarPopup.toggleSaving();
  });
});

avatarButton.addEventListener("click", () => editAvatarPopup.open());

//preview image popup
const previewPopup = new PopupWithImage(".modal_type_preview");

//confirmation popup
const confirmPopup = new PopupWithConfirm(
  ".modal_type_confirm",
  ({ deleter, _id }) => {
    api.deleteCard(_id).then(() => {
      deleter();
      confirmPopup.close();
    });
  }
);

// call everything down here <----------
cardList.clear();
profileSection.renderItems();
cardList.renderItems();

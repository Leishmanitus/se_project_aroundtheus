import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { formData, userData } from "../utils/constants.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";

//search DOM
//profile constants
const profile = document.querySelector(".page__profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");
const avatarButton = profile.querySelector(".profile__button_type_avatar");

//template constant
const templateElement = document.querySelector(".template");

// utility functions
const renderCard = ({ name, link, _id, owner, isLiked }) => {
  const card = new Card(
    { name, link, _id, owner, isLiked },
    (name, link) => {
      previewPopup.open({ name, link });
    },
    () => {
      confirmPopup.open({ deleter: card.deleteCard, _id: card.getInfo()._id });
    },
    ({ isLiked, _id }) => {
      if (!isLiked) {
        api
          .likeCard(_id)
          .then(() => {
            card.likeCard();
          })
          .catch((err) => console.error(err));
      } else {
        api
          .dislikeCard(_id)
          .then(() => {
            card.dislikeCard();
          })
          .catch((err) => console.error(err));
      }
    },
    templateElement
  );

  return card;
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
const userInfo = new UserInfo(userData);

api
  .getUserInformation()
  .then(({ name, avatar, about, _id }) => {
    userInfo.setAllInfo({
      name,
      avatar,
      about,
      _id,
    });
  })
  .catch((err) => console.error(err));

//cards section
const cardList = new Section(
  {
    renderer: () => {
      api
        .getInitialCards()
        .then((items) => {
          items.forEach((item) => {
            const { name, link, _id, owner, isLiked } = item;
            cardList.addItem(
              renderCard({ name, link, _id, owner, isLiked }).generateCard()
            );
          });
        })
        .catch((err) => console.error(err));
    },
  },
  ".page__cards"
);

//edit form
const editFormValidator = new FormValidation("edit", formData);
editFormValidator.enableValidation();

const editPopup = new PopupWithForm(".modal_type_edit", (values) => {
  editPopup.renderSaving(true);
  api
    .updateUserInformation(values)
    .then((values) => {
      userInfo.setUserInfo(values);
      editPopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => editPopup.renderSaving());
});

editButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  editPopup.setInputValues([name, about]);
  editFormValidator.resetValidation();
  editPopup.open();
});

//card form
const cardFormValidator = new FormValidation("card", formData);
cardFormValidator.enableValidation();

const cardPopup = new PopupWithForm(".modal_type_card", ({ title, link }) => {
  const values = { name: title, link: link };
  cardPopup.renderSaving(true);
  api
    .postCard(values)
    .then((values) => {
      cardList.addItem(renderCard(values).generateCard());
      cardFormValidator.disableSubmit();
      cardPopup.resetForm();
      cardPopup.close();
    })
    .catch((err) => console.error(err))
    .finally(() => cardPopup.renderSaving());
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//edit avatar form
const avatarFormValidator = new FormValidation("avatar", formData);
avatarFormValidator.enableValidation();

const editAvatarPopup = new PopupWithForm(
  ".modal_type_avatar",
  ({ avatar }) => {
    editAvatarPopup.renderSaving(true);
    api
      .updateAvatar({ avatar })
      .then(({ avatar }) => {
        userInfo.setAvatar({ avatar });
        avatarFormValidator.disableSubmit();
        editAvatarPopup.resetForm();
        editAvatarPopup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => editAvatarPopup.renderSaving());
  }
);

avatarButton.addEventListener("click", () => editAvatarPopup.open());

//preview image popup
const previewPopup = new PopupWithImage(".modal_type_preview");

//confirmation popup
const confirmPopup = new PopupWithConfirm(
  ".modal_type_confirm",
  ({ deleter, _id }) => {
    api
      .deleteCard(_id)
      .then(() => {
        deleter();
        confirmPopup.close();
      })
      .catch((err) => console.error(err));
  }
);

// call everything down here <----------
cardList.clear();
cardList.renderItems();

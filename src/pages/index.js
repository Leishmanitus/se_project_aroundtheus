import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { formData } from "../utils/constants.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";

//search DOM
//profile constants
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__button_type_edit");
const cardButton = profile.querySelector(".profile__button_type_add");
const avatarButton = profile.querySelector(".profile__avatar-edit");

const templateElement = document.querySelector(".template");

// utility functions
const renderCard = (item) => {
  const card = new Card(
    item,
    ({ title, link }) => {
      previewPopup.open(title, link);
    },
    () => {
      confirmPopup.open();
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
userInfo.setUserInfo(api.getUserInformation());
const profileSection = new Section(
  {
    data: api.getUserInformation().then((data) => {
      const name = data.name;
      const about = data.about;
      const avatar = data.avatar;
      return { name, about, avatar };
    }),
    renderer: (item) => {
      userInfo.setUserInfo({ name: item.name, about: item.about });
      userInfo.setAvatar({ title: item.name, link: item.avatar });
    },
  },
  ".profile"
);
// profileSection.renderItems();

//cards section
const cardList = new Section(
  {
    data: api.getInitialCards(),
    renderer: renderCard,
  },
  ".page__cards"
);

//edit form
const editFormValidator = new FormValidation("edit", formData);
editFormValidator.enableValidation();

const editPopup = new PopupWithForm(".modal_type_edit", (values) => {
  api.updateUserInformation(values).then(({ name, about }) => {
    userInfo.setUserInfo({ name, about });
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
  api.postCard(values).then(({ title, link }) => {
    renderCard({ title, link });
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
  api.updateAvatar(values).then((item) => {
    console.log(item);
    userInfo.setAvatar(item);
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
// cardList.clear();
// cardList.renderItems();

// initCards.forEach((item) => {
//   api.createCard(item);
// });

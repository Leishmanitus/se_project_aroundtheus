import "./index.css";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import { formData, userData, popupData } from "../utils/constants.js";
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

const handleSubmit = (request, popupInstance, loadingText = "Saving...") => {
  popupInstance.renderSaving(true, loadingText);
  request()
    .then(() => {
      popupInstance.close();
    })
    .catch((err) => console.error(err))
    .finally(() => popupInstance.renderSaving());
};

// instantiating form validators
const formValidators = {};

const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];
  formList.forEach((formElement) => {
    const validator = new FormValidation(formElement, config);
    // here you get the name of the form
    const formName = `${formElement.name}-form`;

    // here you store a validator by the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(formData);

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

//cards section
const cardList = new Section(
  {
    renderer: (item) => {
      return renderCard(item).generateCard();
    },
  },
  ".page__cards"
);

Promise.all([api.getUserInformation(), api.getCards()])
  .then(([profileData, cardData]) => {
    userInfo.setAllInfo(profileData);
    cardList.setItems(cardData);
    cardList.renderItems();
  })
  .catch((err) => console.error(err));

//edit form
const editPopup = new PopupWithForm(popupData.editPopup, ({ title, about }) => {
  const values = { name: title, about };
  const makeRequest = () => {
    return api.updateUserInformation(values).then((values) => {
      userInfo.setUserInfo(values);
    });
  };
  handleSubmit(makeRequest, editPopup);
});

editButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  editPopup.setInputValues([name, about]);
  formValidators["edit-form"].resetValidation();
  editPopup.open();
});

//card form
const cardPopup = new PopupWithForm(popupData.cardPopup, ({ title, link }) => {
  const values = { name: title, link };
  const makeRequest = () => {
    return api.postCard(values).then((values) => {
      cardList.addItem(renderCard(values).generateCard());
      cardPopup.resetForm();
      formValidators["card-form"].disableSubmit();
    });
  };
  handleSubmit(makeRequest, cardPopup);
});

cardButton.addEventListener("click", () => {
  cardPopup.open();
});

//edit avatar form
const editAvatarPopup = new PopupWithForm(
  popupData.avatarPopup,
  ({ avatar }) => {
    const values = { avatar };
    const makeRequest = () => {
      return api.updateAvatar(values).then((values) => {
        userInfo.setAvatar(values);
        editAvatarPopup.resetForm();
        formValidators["avatar-form"].disableSubmit();
      });
    };
    handleSubmit(makeRequest, editAvatarPopup);
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

export const initCards = [
  {
    name: "Great Cormorant",
    link: "<%= require('./images/great-cormorant.jpg')%>",
  },
  {
    name: "Kingfisher",
    link: "<%= require('./images/kingfisher.jpg')%>",
  },
  {
    name: "Green Parakeet",
    link: "<%= require('./images/green-parakeet.jpg')%>",
  },
  {
    name: "Pelican",
    link: "<%= require('./images/pelican.jpg')%>",
  },
  {
    name: "Black Crow",
    link: "<%= require('./images/crow.jpg')%>",
  },
  {
    name: "Canada Goose",
    link: "<%= require('./images/canada-goose.jpg')%>",
  },
];

export const cardData = {
  containerSelector: ".page__cards",
  cardSelector: ".card",
  templateId: "#card-template",
};

export const popupData = {
  editPopupSelector: ".modal_type_edit",
  cardPopupSelector: ".modal_type_card",
  previewPopupSelector: ".view",
  imageSelector: ".view__image",
  captionSelector: ".view__caption",
};

export const userData = {
  name: ".profile__name",
  job: ".profile__description",
};

export const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  editFormId: "#profile-edit-form",
  cardFormId: "#card-add-form",
  nameId: "#form-name",
  descriptionId: "#form-description",
  titleId: "#form-title",
  linkId: "#form-link",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorVisibleClass: "form__error_visible",
};

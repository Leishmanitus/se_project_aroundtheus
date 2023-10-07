const greatCormorant = new URL(
  "../images/great-cormorant.jpg",
  import.meta.url
);
const kingFisher = new URL("../images/kingfisher.jpg", import.meta.url);
const greenParakeet = new URL("../images/green-parakeet.jpg", import.meta.url);
const pelican = new URL("../images/pelican.jpg", import.meta.url);
const blackCrow = new URL("../images/crow.jpg", import.meta.url);
const canadaGoose = new URL("../images/canada-goose.jpg", import.meta.url);

export const initCards = [
  {
    name: "Great Cormorant",
    link: greatCormorant,
  },
  {
    name: "Kingfisher",
    link: kingFisher,
  },
  {
    name: "Green Parakeet",
    link: greenParakeet,
  },
  {
    name: "Pelican",
    link: pelican,
  },
  {
    name: "Black Crow",
    link: blackCrow,
  },
  {
    name: "Canada Goose",
    link: canadaGoose,
  },
];

export const popupData = {
  editPopupSelector: ".modal_type_edit",
  cardPopupSelector: ".modal_type_card",
  previewPopupSelector: ".modal_type_preview",
  imageSelector: ".modal__image",
  captionSelector: ".modal__caption",
};

// export const userData = {
//   name: ".profile__name",
//   job: ".profile__job",
// };

export const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  editFormId: "#profile-edit-form",
  cardFormId: "#card-add-form",
  nameId: "#form-name",
  descriptionId: "#form-job",
  titleId: "#form-title",
  linkId: "#form-link",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorVisibleClass: "form__error_visible",
};

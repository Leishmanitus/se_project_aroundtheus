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

export const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  editFormId: "#edit",
  cardFormId: "#card",
  avatarFormId: "#avatar",
  nameId: "#edit-name",
  descriptionId: "#edit-about",
  titleId: "#card-title",
  linkId: "#card-link",
  avatarId: "#avatar-link",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorVisibleClass: "form__error_visible",
};

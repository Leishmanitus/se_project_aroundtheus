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
    title: "Great Cormorant",
    link: greatCormorant,
  },
  {
    title: "Kingfisher",
    link: kingFisher,
  },
  {
    title: "Green Parakeet",
    link: greenParakeet,
  },
  {
    title: "Pelican",
    link: pelican,
  },
  {
    title: "Black Crow",
    link: blackCrow,
  },
  {
    title: "Canada Goose",
    link: canadaGoose,
  },
];

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

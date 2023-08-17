//profile constants
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
const profileDescription = profile.querySelector(".profile__description");
const newImageButton = profile.querySelector(".profile__button_type_add");

//card constants
const cardContainer = document.querySelector(".page__cards");
const cardTemplate = cardContainer
  .querySelector("#card-template")
  .content.querySelector(".card");

//modal constants
// const modal = document.querySelector(".modal");
// const modalTitle = modal.querySelector(".modal__title");
// const closeModal = modal.querySelector(".modal__close-button");

//form constants
const editForm = document.forms["profile-edit-form"];
const editModal = editForm.closest(".modal");
const editCloseButton = editModal.querySelector(".modal__close-button");
const formName = editForm.querySelector("#form-name");
const formDescription = editForm.querySelector("#form-description");
const submitEditButton = editForm.querySelector(".form__save-button");

const addForm = document.forms["image-add-form"];
const addModal = addForm.closest(".modal");
const addCloseButton = addModal.querySelector(".modal__close-button");
const formTitle = addForm.querySelector("#form-title");
const formLink = addForm.querySelector("#form-link");
const addImageButton = addForm.querySelector(".form__save-button");

const initialCards = [
  {
    name: "Great Cormorant",
    link: "./images/great-cormorant.jpg",
  },
  {
    name: "Kingfisher",
    link: "./images/kingfisher.jpg",
  },
  {
    name: "Green Parakeet",
    link: "./images/green-parakeet.jpg",
  },
  {
    name: "Pelican",
    link: "./images/pelican.jpg",
  },
  {
    name: "Black Crow",
    link: "./images/crow.jpg",
  },
  {
    name: "Canada Goose",
    link: "./images/canada-goose.jpg",
  },
];

//toggle functions
const toggleEditModal = function () {
  editModal.classList.toggle("modal_opened");
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
};

const toggleAddModal = function () {
  addModal.classList.toggle("modal_opened");
  formTitle.value = "";
  formLink.value = "";
};

//event handlers
const handleProfileEditSubmission = (event) => {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  toggleEditModal();
};

const handleNewImageSubmission = (event) => {
  event.preventDefault();
  const cardInfo = {
    name: formTitle.value,
    link: formLink.value,
  };
  initialCards.prepend(cardInfo);
  cardContainer.prepend(makeCard(cardInfo));
  toggleAddModal();
};

//card functions
const makeCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  const newCaption = newCard.querySelector(".card__caption");
  const heartButton = newCard.querySelector(".card__heart-button");

  heartButton.addEventListener("click", () =>
    heartButton.classList.toggle("card__heart-button_liked")
  );

  newImage.src = card.link;
  newCaption.textContent = card.name;

  return newCard;
};

const showCard = (card, wrapper) => {
  wrapper.prepend(makeCard(card));
};

const removeCard = (event) => event.target.closest(".card").remove();

//button event listeners
editButton.addEventListener("click", toggleEditModal);
newImageButton.addEventListener("click", toggleAddModal);

editForm.addEventListener("submit", handleProfileEditSubmission);
addForm.addEventListener("submit", handleNewImageSubmission);

editCloseButton.addEventListener("click", toggleEditModal);
addCloseButton.addEventListener("click", toggleAddModal);

//cardTrashButton.addEventListener("click", removeCard);

//initial calls
initialCards.forEach((card) => showCard(card, cardContainer));
//dog call for testing https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-6.jpg

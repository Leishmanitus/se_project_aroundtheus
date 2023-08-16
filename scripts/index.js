//profile constants
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
const profileDescription = profile.querySelector(".profile__description");
const newImageButton = profile.querySelector(".profile__button_type_add");

//card constants
const cardContainer = document.querySelector(".page__cards");
const cardTemplate = cardContainer.querySelector("#card-template").content;
const cardBody = cardTemplate.querySelector(".card");
const cardTrashButton = cardTemplate.querySelector(".card__trash-button");
const cardHeartButton = cardTemplate.querySelector(".card__heart-button");

//modal constants
const modal = document.querySelector(".modal");
const modalTitle = modal.querySelector(".modal__title");
const closeModal = modal.querySelector(".modal__close-button");

//form constants
const editForm = document.forms["profile-edit-form"];
const formName = editForm.querySelector("#form-name");
const formDescription = editForm.querySelector("#form-description");
const submitEditButton = editForm.querySelector(".form__save-button");

const addForm = document.forms["image-add-form"];
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
const toggleCloseModal = () => modal.classList.toggle("modal_opened");

const toggleEditModal = () => {
  toggleCloseModal();
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
};

const toggleAddModal = () => {
  toggleCloseModal();
  formTitle.value = "";
  formLink.value = "";
};

//event handle functions
const handleProfileEditSubmission = () => {
  this.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  toggleCloseModal();
};

const handleNewImageSubmission = (event) => {
  event.preventDefault();
  const cardInfo = {
    name: formTitle.value,
    link: formLink.value,
  };
  initialCards.prepend(cardInfo);
  cardContainer.prepend(makeCard(cardInfo));
  toggleCloseModal();
};

//card functions
const makeCard = (card) => {
  const newCard = cardBody.cloneNode(true);
  newCard.querySelector(".card__image").src = card.link;
  newCard.querySelector(".card__caption").textContent = card.name;
  return newCard;
};

const showCards = (data) =>
  data.forEach((card) => cardContainer.append(makeCard(card)));

const likeCard = (event) =>
  event.target
    .querySelector(".card__heart-button")
    .classList.toggle("card__heart-button_liked");

const removeCard = () => this.remove();

//button event listeners
editButton.addEventListener("click", () => toggleEditModal());
editForm.addEventListener("submit", () => handleProfileEditSubmission());
newImageButton.addEventListener("click", () => toggleAddModal());
addForm.addEventListener("submit", () => handleNewImageSubmission());
closeModal.addEventListener("click", () => toggleCloseModal());
cardTrashButton.addEventListener("click", () => removeCard());
cardHeartButton.addEventListener("click", () => likeCard());

//initial calls
showCards(initialCards);
//dog call for testing https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-6.jpg

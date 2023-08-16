//profile constants
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
const profileDescription = profile.querySelector(".profile__description");
const addImageButton = profile.querySelector(".profile__button_type_add");

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
const form = document.forms["profile-edit-form"];
const formName = form.querySelector("#form-name");
const formDescription = form.querySelector("#form-description");
const submitButton = form.querySelector(".form__save-button");

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
  modalTitle.textContent = "Edit Profile";
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  formName.placeholder = "Name";
  formDescription.placeholder = "Description";
  submitButton.textContent = "Save";
};

const toggleAddModal = () => {
  toggleCloseModal();
  modalTitle.textContent = "New Image";
  formName.value = "";
  formDescription.value = "";
  formName.placeholder = "Title";
  formDescription.placeholder = "Image link";
  submitButton.textContent = "Create";
};

//event handle functions
const handleProfileEditSubmission = (event) => {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  toggleCloseModal();
};

const handleNewImageSubmission = (event) => {
  event.preventDefault();
  const cardInfo = {
    name: formName.value,
    link: formDescription.value,
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

const likeCard = () => this.classList.toggle("card__heart-button_liked");

const removeCard = () => this.remove();

//button event listeners
editButton.addEventListener("click", () => toggleEditModal());
addImageButton.addEventListener("click", () => toggleAddModal());
if (modalTitle.textContent === "Edit Profile") {
  form.addEventListener("submit", () => handleProfileEditSubmission());
} else if (modalTitle.textContent === "New Image") {
  form.addEventListener("submit", () => handleNewImageSubmission());
}
closeModal.addEventListener("click", () => toggleCloseModal());
cardTrashButton.addEventListener("click", () => removeCard());
cardHeartButton.addEventListener("click", () => likeCard());

//initial calls
showCards(initialCards);
//dog call for testing https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-6.jpg

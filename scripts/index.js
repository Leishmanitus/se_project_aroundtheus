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

//modal constants
const modal = document.querySelector(".modal");
const modalTitle = modal.querySelector(".modal__title");
const closeModal = modal.querySelector(".modal__close-button");

//form constants
const form = document.forms["profile-edit-form"];
const formName = form.querySelector("#form-name");
const formDescription = form.querySelector("#form-description");
const submitForm = form.querySelector(".form__save-button");

const initialCards = [
  {
    name: "Great Cormorant",
    link: "./images/great-cormorant.jpg",
    alt: "A blue eyed Cormorant drying its wings",
  },
  {
    name: "Kingfisher",
    link: "./images/kingfisher.jpg",
    alt: "A Kingfisher lurking in the water",
  },
  {
    name: "Green Parakeet",
    link: "./images/green-parakeet.jpg",
    alt: "A bright green parakeet in a tree knook",
  },
  {
    name: "European Blue Jay",
    link: "./images/eu-blue-jay.jpg",
    alt: "A brilliantly blue bird rests on a tree limb",
  },
  {
    name: "Black Crow",
    link: "./images/crow.jpg",
    alt: "A black crow cracking a nut open",
  },
  {
    name: "Canada Goose",
    link: "./images/canada-goose.jpg",
    alt: "A Canada Goose with its duckling on its back",
  },
];

//toggle functions
function toggleClose() {
  modal.classList.toggle("modal_opened");
}

function toggleEdit() {
  toggleClose();
  modalTitle.textContent = "Edit Profile";
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  formName.placeholder = "Name";
  formDescription.placeholder = "Description";
}

function toggleAdd() {
  toggleClose();
  modalTitle.textContent = "New Image";
  formName.value = "";
  formDescription.value = "";
  formName.placeholder = "Title";
  formDescription.placeholder = "Image link";
}

//event handle functions
function handleProfileEditSubmission(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  toggleClose();
}

function handleNewImageSubmission(event) {
  event.preventDefault();
}

//card functions
function makeCard(card) {
  const newCard = cardBody.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  newImage.src = card.link;
  newImage.alt = card.alt;
  newCard.querySelector(".card__caption").textContent = card.name;
  return newCard;
}

function showCards(data) {
  data.forEach(function (card) {
    cardContainer.append(makeCard(card));
  });
}

//button event listeners
editButton.addEventListener("click", toggleEdit);
addImageButton.addEventListener("click", toggleAdd);
form.addEventListener("submit", handleProfileEditSubmission);
closeModal.addEventListener("click", toggleClose);

//initial calls
showCards(initialCards);

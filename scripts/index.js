//constant variables
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const editButton = profile.querySelector(".profile__button_type_edit");
const profileDescription = profile.querySelector(".profile__description");

const cardContainer = document.querySelector(".page__cards");
const cardTemplate = cardContainer.querySelector("#card-template").content;
const cardBody = cardTemplate.querySelector(".card");

const modal = document.querySelector(".modal");
const closeModal = modal.querySelector(".modal__close-button");

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

//functions
function toggleModal() {
  modal.classList.toggle("modal_opened");
  if (modal.classList.contains("modal_opened")) {
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
  }
}

function handleProfileEditSubmission(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  toggleModal();
}

function makeCard(card) {
  newCard = cardBody.cloneNode(true);
  newCard.querySelector(".card__image").src = card.link;
  newCard.querySelector(".card__image").alt = card.alt;
  newCard.querySelector(".card__caption").textContent = card.name;
  return newCard;
}

function showCards(data) {
  for (let card of data) {
    cardContainer.append(makeCard(card));
  }
}

//button event listeners
editButton.addEventListener("click", toggleModal);
submitForm.addEventListener("submit", handleProfileEditSubmission);
closeModal.addEventListener("click", toggleModal);

//initial calls
showCards(initialCards);

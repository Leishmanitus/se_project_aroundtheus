//constant variables
const modal = document.querySelector(".modal");
const profile = document.querySelector(".profile");
const cardTemplate = document.querySelector("#card-template").content;
const editButton = profile.querySelector(".profile .profile__button_type_edit");
const closeModalButton = modal.querySelector(".modal .modal__close-button");
const submitFormButton = modal.querySelector(".form__save-button");

//let variables
let modalName = modal.querySelector("#form-name");
let modalDescription = modal.querySelector("#form-description");
let profileName = profile.querySelector(".profile__name");
let profileDescription = profile.querySelector(".profile__description");
let initialCards = [
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
  modal.classList.toggle("modal__opened");
  if (modal.classList.contains("modal__opened")) {
    modal.setAttribute("style", "display: flex");
    modalName.value = profileName.textContent;
    modalDescription.value = profileDescription.textContent;
  } else {
    modal.setAttribute("style", "display: none");
  }
}

function handleProfileEditSubmission(event) {
  event.preventDefault();
  profileName.textContent = modalName.value;
  profileDescription.textContent = modalDescription.value;
  toggleModal();
}

function showCards(data) {
  let cardContainer = document.querySelector(".page__cards");
  for (let card of data) {
    let userCard = cardTemplate.querySelector(".card").cloneNode(true);
    userCard.querySelector(".card__image").src = card.link;
    userCard.querySelector(".card__image").alt = card.alt;
    userCard.querySelector(".card__caption").textContent = card.name;
    cardContainer.append(userCard);
  }
}

//button event listeners
editButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
submitFormButton.addEventListener("click", handleProfileEditSubmission);

//initial calls
showCards(initialCards);

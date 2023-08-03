//constant variables
const modal = document.querySelector(".modal");
const profile = document.querySelector(".profile");
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
    link: "../images/great-cormorant.jpg",
  },
  {
    name: "Kingfisher",
    link: "../images/kingfisher.jpg",
  },
  {
    name: "Green Parakeet",
    link: "../images/green-parakeet.jpg",
  },
  {
    name: "European Blue Jay",
    link: "../images/eu-blue-jay.jpg",
  },
  {
    name: "Black Crow",
    link: "../images/crow.jpg",
  },
  {
    name: "Canada Goose",
    link: "../images/canada-goose.jpg",
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

//button event listeners
editButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
submitFormButton.addEventListener("click", handleProfileEditSubmission);

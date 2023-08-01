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

function toggleModal() {
  const modal = document.querySelector(".modal");
  if (modal.classList.contains("modal__opened")) {
    modal.setAttribute("style", "display: none");
    modal.classList.toggle("modal__opened");
  } else {
    modal.setAttribute("style", "display: flex");
    modal.classList.toggle("modal__opened");
  }
}
const editButton = document.querySelector(
  ".profile .profile__button_type_edit"
);
editButton.addEventListener("click", toggleModal);

const closeModalButton = document.querySelector(".modal .modal__close-button");
closeModalButton.addEventListener("click", toggleModal);

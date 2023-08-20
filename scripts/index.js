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

//form constants
const editForm = document.forms["profile-edit-form"];
const editModal = editForm.closest(".modal");
const formName = editForm.querySelector("#form-name");
const formDescription = editForm.querySelector("#form-description");
const submitEditButton = editForm.querySelector(".form__save-button");

const addForm = document.forms["image-add-form"];
const addModal = addForm.closest(".modal");
const formTitle = addForm.querySelector("#form-title");
const formLink = addForm.querySelector("#form-link");
const addImageButton = addForm.querySelector(".form__save-button");

//image view constants
const modalView = document.querySelector(".view");
const modalViewImage = modalView.querySelector(".view__image");
const modalViewCaption = modalView.querySelector(".view__caption");

//close buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

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

const makeImage = (link, title) => {
  modalViewImage.src = link;
  modalViewImage.alt = title;
  modalViewCaption.textContent = title;
};

const makeCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  const newCaption = newCard.querySelector(".card__caption");
  const newTrashButton = newCard.querySelector(".card__trash-button");
  const newHeartButton = newCard.querySelector(".card__heart-button");

  newImage.addEventListener("click", () => {
    const imageLink = newImage.src;
    const imageTitle = newCaption.textContent;
    makeImage(imageLink, imageTitle);
    openPopup(modalView);
  });

  newTrashButton.addEventListener("click", (event) => {
    event.target.closest(".card").remove();
  });

  newHeartButton.addEventListener("click", () =>
    newHeartButton.classList.toggle("card__heart-button_liked")
  );

  newImage.src = card.link;
  newImage.alt = card.name;
  newCaption.textContent = card.name;

  return newCard;
};

function openPopup(popup) {
  popup.classList.add("modal_opened");
}
function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

editButton.addEventListener("click", () => {
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  openPopup(editModal);
});

newImageButton.addEventListener("click", () => {
  openPopup(addModal);
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closePopup(editModal);
  event.target.reset();
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardInfo = {
    name: formTitle.value,
    link: formLink.value,
  };
  cardContainer.prepend(makeCard(cardInfo));
  closePopup(addModal);
  event.target.reset();
});

initialCards.forEach((card) => cardContainer.prepend(makeCard(card)));
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");

  button.addEventListener("click", () => closePopup(popup));
});

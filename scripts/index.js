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

//view constants
const view = document.querySelector(".view");
const viewImage = view.querySelector(".view__image");
const viewCloseButton = view.querySelector(".view__close-button");
const viewCaption = view.querySelector(".view__caption");

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
  viewImage.src = link;
  viewCaption.textContent = title;

  viewCloseButton.addEventListener(
    "click",
    (event) => {
      const thisView = event.target.closest(".view");
      thisView.classList.toggle("view_opened");
    },
    { once: true }
  );
};

const makeCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  const newCaption = newCard.querySelector(".card__caption");
  const newTrashButton = newCard.querySelector(".card__trash-button");
  const newHeartButton = newCard.querySelector(".card__heart-button");

  newImage.addEventListener("click", (event) => {
    const imageLink = newImage.src;
    const imageTitle = newCaption.textContent;
    makeImage(imageLink, imageTitle);
    view.classList.toggle("view_opened");
  });

  newTrashButton.addEventListener("click", (event) => {
    event.target.closest(".card").remove();
  });

  newHeartButton.addEventListener("click", () =>
    newHeartButton.classList.toggle("card__heart-button_liked")
  );

  newImage.src = card.link;
  newCaption.textContent = card.name;

  return newCard;
};

//toggle functions
editButton.addEventListener("click", () => {
  editModal.classList.toggle("modal_opened");
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
});

editCloseButton.addEventListener("click", () => {
  editModal.classList.toggle("modal_opened");
});

newImageButton.addEventListener("click", () => {
  addModal.classList.toggle("modal_opened");
  formTitle.value = "";
  formLink.value = "";
});

addCloseButton.addEventListener("click", () => {
  addModal.classList.toggle("modal_opened");
});

//event handlers
editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  editModal.classList.toggle("modal_opened");
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardInfo = {
    name: formTitle.value,
    link: formLink.value,
  };
  cardContainer.prepend(makeCard(cardInfo));
  addModal.classList.toggle("modal_opened");
});

//initial calls
initialCards.forEach((card) => cardContainer.prepend(makeCard(card)));

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago-di-braies.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const closeButton = editProfileModal.querySelector(".popup__close");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const imageModal = document.querySelector("#image-popup");
const modalImage = imageModal.querySelector(".popup__image");
const modalCaption = imageModal.querySelector(".popup__caption");
const imageModalCloseButton = imageModal.querySelector(".popup__close");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editProfileModal);
}
function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardTitle.textContent = name;

  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener("click", function () {
    modalImage.src = link;
    modalImage.alt = name;
    modalCaption.textContent = name;

    openModal(imageModal);
  });

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_is-active");
  });
  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}
editProfileButton.addEventListener("click", handleOpenEditModal);

closeButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});
imageModalCloseButton.addEventListener("click", function () {
  closeModal(imageModal);
});

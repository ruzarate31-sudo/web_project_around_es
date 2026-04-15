import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
  { name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
  { name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago-di-braies.jpg" },
];


const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardsList = document.querySelector(".cards__list");
const addButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const newCardForm = document.querySelector("#new-card-form");


const editFormValidator = new FormValidator(validationConfig, editProfileForm);
const addFormValidator = new FormValidator(validationConfig, newCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardsList.append(cardElement);
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();

  
  const nameInput = evt.target.querySelector(".popup__input_type_card-name");
  const linkInput = evt.target.querySelector(".popup__input_type_url");

  
  if (nameInput && linkInput) {
    const newCardData = {
      name: nameInput.value,
      link: linkInput.value
    };

    const cardElement = createCard(newCardData);
    cardsList.prepend(cardElement);

    closeModal(newCardModal);
    evt.target.reset(); 
    addFormValidator.resetValidation();
  }
}


editProfileButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  editFormValidator.resetValidation(); 
  openModal(editProfileModal);
});

addButton.addEventListener("click", () => {
  addFormValidator.resetValidation(); 
  openModal(newCardModal);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
newCardForm.addEventListener("submit", handleNewCardSubmit);


const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened") || evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});
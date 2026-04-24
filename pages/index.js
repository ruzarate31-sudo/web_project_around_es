import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
  { name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
  { name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago-di-braies.jpg" },
];


const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const editFormElement = document.querySelector("#edit-profile-form");
const addFormElement = document.querySelector("#new-card-form");


const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description"
});


const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();


function createCard(data) {
  const card = new Card(data, "#card-template", (cardData) => {
    imagePopup.open(cardData);
  });

  return card.generateCard();
}


const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    }
  },
  ".cards__list"
);

cardSection.renderItems();


const editProfilePopup = new PopupWithForm("#edit-popup", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.description
  });

  editProfilePopup.close();
});

editProfilePopup.setEventListeners();


const addCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  const cardElement = createCard(formData);
  cardSection.addItem(cardElement);
  addCardPopup.close();
});

addCardPopup.setEventListeners();


const editFormValidator = new FormValidator(validationConfig, editFormElement);
const addFormValidator = new FormValidator(validationConfig, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();

  nameInput.value = userData.name;
  jobInput.value = userData.job;

  editFormValidator.resetValidation();
  editProfilePopup.open();
});


addButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardPopup.open();
});
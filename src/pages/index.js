import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";


const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1/",
  headers: {
    authorization: "2a4d7441-fa8c-47e6-90ab-f641e1a8e870"
  }
});




const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarEditButton = document.querySelector(".profile__avatar-edit-button");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const editFormElement = document.querySelector("#edit-profile-form");
const addFormElement = document.querySelector("#new-card-form");
const avatarFormElement = document.querySelector("#avatar-form");

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image"
});


const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const deleteCardPopup = new PopupWithConfirmation(
  "#delete-card-popup"
);

deleteCardPopup.setEventListeners();

const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    }
  },
  ".cards__list"
);


function createCard(data) {

  const card = new Card(

    {
      ...data,
      userId: userInfo.getUserId()
    },
    "#card-template",
    (cardData) => {
      imagePopup.open(cardData);
    },

    (cardInstance) => {
      api.changeLikeCardStatus(
        cardInstance.getId(),
        cardInstance.isLiked()
      )
        .then((updatedCardData) => {
          cardInstance.updateLikeStatus(updatedCardData);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    (cardInstance) => {
      deleteCardPopup.setSubmitAction(() => {
        api.deleteCard(cardInstance.getId())
          .then(() => {
            cardInstance.deleteCard();
            deleteCardPopup.close();
          })

          .catch((err) => {
            console.error(err);
          });
      });
      deleteCardPopup.open();
    }
  );
  return card.generateCard();
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {

    userInfo.setUserInfo(userData);

    cards.forEach((cardData) => {
      const cardElement = createCard(cardData);
      cardSection.addItem(cardElement);
    });

  })
  .catch((err) => {
    console.error(err);
  });


const editProfilePopup = new PopupWithForms("#edit-popup", (formData) => {
 
  editProfilePopup.renderLoading(true);

 api.editUserInfo({
  name: formData.name,
  about: formData.description
 })
    .then((updatedUserData) => {
      userInfo.setUserInfo(updatedUserData);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editProfilePopup.renderLoading(false);
    });
});
editProfilePopup.setEventListeners();


const addCardPopup = new PopupWithForms("#new-card-popup", (formData) => {
  addCardPopup.renderLoading(true, "Creando...");

  api.addCard({
    name: formData["place-name"],
    link: formData.link
  })
    .then((newCardData) => {
      const cardElement = createCard(newCardData);
      cardSection.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      addCardPopup.renderLoading(false);
    });
});


const avatarPopup = new PopupWithForms(
  "#avatar-popup",

  (formData) => {

    avatarPopup.renderLoading(true);

    api.editAvatar(formData.avatar)

      .then((updatedUserData) => {

        userInfo.setUserAvatar(updatedUserData);
        avatarPopup.close();
      })

      .catch((err) => {

        console.error(err);
      })

      .finally(() => {

        avatarPopup.renderLoading(false);
      });
  }
);

avatarPopup.setEventListeners();

addCardPopup.setEventListeners();


const editFormValidator = new FormValidator(validationConfig, editFormElement);
const addFormValidator = new FormValidator(validationConfig, addFormElement);
const avatarFormValidator = new FormValidator(validationConfig, avatarFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();


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

avatarEditButton.addEventListener("click", () => {

  avatarFormValidator.resetValidation();

  avatarPopup.open();
  });
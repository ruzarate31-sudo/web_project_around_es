// 1. Importamos la función desde el archivo que ya creaste
import { openModal } from "./utils.js";

// 2. Definimos la clase. "export default" permite que index.js la use después.
export default class Card {
  // El constructor recibe los datos ({name, link}) y el selector del template
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }


  _setEventListeners() {

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        this._handleLikeIcon(evt);
      });


    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreviewImage();
      });
  }

  
  _handleLikeIcon(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }

  
  _handleDeleteCard() {
    this._element.remove();
   
    this._element = null;
  }

   _handlePreviewImage() {
    const imageModal = document.querySelector("#image-popup");
    const modalImage = imageModal.querySelector(".popup__image");
    const modalCaption = imageModal.querySelector(".popup__caption");

    modalImage.src = this._link;
    modalImage.alt = this._name;
    modalCaption.textContent = this._name;

    openModal(imageModal);
  }

    generateCard() {
   
    this._element = this._getTemplate();
    
       this._setEventListeners();

       const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

       return this._element;
  }
}
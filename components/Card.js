export default class Card {

  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick
  ) {
    this._name = data.name;

    this._link = data.link;

    this._cardId = data._id;

    this._isLiked = data.isLiked;

    this._userId = data.userId;

    this._ownerId = data.owner;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {

    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {

    this._likeButton.addEventListener("click", () => {

      this._handleLikeClick(this);
    });

    this._deleteButton.addEventListener("click", () => {

      this._handleDeleteClick(this);
    });

    this._cardImage.addEventListener("click", () => {

      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    });
  }

  isLiked() {

    return this._isLiked;
  }

  updateLikeStatus(updatedCardData) {

    this._isLiked = updatedCardData.isLiked;

    this._updateLikeView();
  }

  _updateLikeView() {
    if (this._isLiked) {
      this._likeButton.classList.add(
        "card__like-button_is-active"
      );

    } else {
      this._likeButton.classList.remove(
        "card__like-button_is-active"
      );
    }
  }

  getId() {

    return this._cardId;
  }

  deleteCard() {

    this._element.remove();

    this._element = null;
  }


  generateCard() {
      this._element = this._getTemplate();
      this._cardImage =
      this._element.querySelector(".card__image");
      this._likeButton =
      this._element.querySelector(".card__like-button");


    this._deleteButton =
      this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link;

    this._cardImage.alt = this._name;

  
    this._element.querySelector(
      ".card__title"
    ).textContent = this._name;


    if (this._ownerId !== this._userId) {

      this._deleteButton.remove();
    }

    this._updateLikeView();

    this._setEventListeners();

    return this._element;
  }
}
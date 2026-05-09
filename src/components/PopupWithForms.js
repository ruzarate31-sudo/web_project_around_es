import Popup from "./Popup.js";
export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); 
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList =
      this._form.querySelectorAll(".popup__input");


    this._submitButton =
      this._form.querySelector(".popup__button");

    this._defaultButtonText =
      this._submitButton.textContent;
  }


  _getInputValues() {

    const formValues = {};

  
    this._inputList.forEach((input) => {

      formValues[input.name] = input.value;
    });

    return formValues;
  }

  renderLoading(isLoading, loadingText = "Guardando...") {

    if (isLoading) {

      this._submitButton.textContent = loadingText;

    } else {

      this._submitButton.textContent =
        this._defaultButtonText;
    }
  }

  setEventListeners() {

    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {

      evt.preventDefault();

      this._handleFormSubmit(
        this._getInputValues()
      );
    });
  }

  close() {

    this._form.reset();

    super.close();
  }
}
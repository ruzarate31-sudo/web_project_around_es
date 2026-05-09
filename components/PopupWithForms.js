import Popup from './Popup.js';

export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
  super(popupSelector);

this._handleFormSubmit = handleFormSubmit;
this._form = this._popup.querySelector('.popup__form');
this._inputList = this._form.querySelectorAll('.popup__input');
this._submitButton = this._form.querySelector('.popup__button');
this._submitButtonText = this._submitButton.textContent;
  }


  _getInputValues() {
  const inputValues = {};
  this._inputList.forEach(input => {
  inputValues[input.name] = input.value;
});
return inputValues;
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (event) => {
  event.preventDefault();
  this._handleFormSubmit(this._getInputValues());
});
}

renderLoading(isLoading, loadingText = "Guardando...") {
  if (isLoading) {
    this._submitButton.textContent = loadingText;
  } else {
    this._submitButton.textContent = this._submitButtonText;
  }
} 

close() {
  super.close();
  this._form.reset();
}
}
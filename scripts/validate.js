const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};


function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(function(form) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    
    toggleButtonState(inputs, submitButton, config);

    inputs.forEach(function(input) {
      checkInputValidity(form, input, config);
    });

    inputs.forEach(function(input) {
      input.addEventListener("input", function () {
        checkInputValidity(form, input, config);
        toggleButtonState(inputs, submitButton, config);
      });
    });
  });
}

function showInputError(form, input, errorMessage, config) {
  const errorElement = form.querySelector(`.popup__error_type_${input.name}`);

  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(form, input, config) {
  const errorElement = form.querySelector(`.popup__error_type_${input.name}`);

  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
}

function hasInvalidInput(inputs) {
  return inputs.some(function(input) {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputs, button, config) {
  if (hasInvalidInput(inputs)) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  }
}
function resetValidation(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputs.forEach(function(input) {
    hideInputError(form, input, config);
  });

  toggleButtonState(inputs, submitButton, config);
}

enableValidation(validationConfig);

window.validationConfig = validationConfig;
window.resetValidation = resetValidation;
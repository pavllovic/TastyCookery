const formValidator = function(form) {
  this.form = form;
  this.fields = this.form.querySelectorAll('input');
  this.mapError = new Map();
};

formValidator.prototype = {
  init: function() {
    this.form.noValidate = true;
    this.isFormValid = true;
    this.setListeners();
  },

  setListeners: function() {
    this.form.addEventListener('submit', this.validateForm.bind(this));
    this.fields.forEach((input) => {
      input.addEventListener('input', this.onInput.bind(this));
      this.addErrorTooltip(input);
    });
  },

  checkEmail: function(field) {
    const input = field;
    const mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const isMatch = input.value.match(mailFormat);
    input.validity.formatMismatch = !isMatch;

    !isMatch
      ? input.setCustomValidity('wrong pochta')
      : input.setCustomValidity('');

    return input.validity.valid;
  },

  checkInput: function(input) {
    const type = input.getAttribute('type');
    if(type === 'email') this.checkEmail(input);
    return input.checkValidity();
  },

  addErrorTooltip: function(input) {
    const tooltip = document.createElement('div');
    const errorMessage = document.createElement('p');
    tooltip.style = 'overflow: hidden; height: 0px; opacity: 0';
    tooltip.classList.add('form--error');
    errorMessage.classList.add('form--error-msg');
    tooltip.appendChild(errorMessage);
    input.after(tooltip);
  },

  getErrorTooltip: function(input) {
    return input.nextElementSibling;
  },

  showErrorTooltip: function(input) {
    const tooltip = this.getErrorTooltip(input);
    const errorMessage = tooltip.querySelector('.form--error-msg');
    const delay = getComputedStyle(errorMessage).transitionDuration.slice(0, -1) * 1000;
    this.hideErrorMessage(errorMessage);
    setTimeout(() => {
      errorMessage.innerText = input.validationMessage;
      this.showErrorMessage(errorMessage);
      tooltip.style = `height: ${errorMessage.offsetHeight}px; opacity: 1`;
    }, delay);
  },

  hideErrorTooltip: function(input) {
    const tooltip = this.getErrorTooltip(input);
    tooltip.style.height = '0px';
  },

  showErrorMessage: function(element) {
    const errorMessage = element;
    errorMessage.style.opacity = '1';
  },

  hideErrorMessage: function(element) {
    const errorMessage = element;
    errorMessage.style.opacity = '0';
  },

  getInputError: function(input) {
    const nameError = Object.keys(input.validity).filter((key) => input.validity[key]);
    this.mapError.set(input.name, nameError);
  },

  validInputHandler: function(input) {
    this.mapError.clear();
    this.hideErrorTooltip(input);
  },

  invalidInputHandler: function(input) {
    const typeError = this.mapError.get(input.name);
    if(!input.validity[typeError]) {
      this.getInputError(input);
      this.showErrorTooltip(input);
    }
  },

  onInput: function(e) {
    if(!this.isFormValid) {
      this.validateInput(e.target);
    }
  },

  validateInput: function(input) {
    const isValid = this.checkInput(input);
    isValid
      ? this.validInputHandler(input)
      : this.invalidInputHandler(input);
  },

  validateForm: function(e) {
    this.fields.forEach((input) => {
      this.validateInput(input);
    });

    if (!this.form.checkValidity()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  },
};

export default formValidator;

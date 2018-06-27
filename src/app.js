const NumberFormView = require('./views/number_form_view');
const NumberFacts = require("./models/number_facts.js");

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const numberFacts = new NumberFacts();
  numberFacts.bindEvents();
});

const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const NumberFacts = function(){

};

NumberFacts.prototype.bindEvents = function () {
  PubSub.subscribe("NumberFormView:submit", (event) => {
    const number = event.detail;
    const url = `http://numbersapi.com/${number}?json`;
    console.log(url);
  });
};

module.exports = NumberFacts;

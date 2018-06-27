const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const NumberFacts = function(){

};

NumberFacts.prototype.bindEvents = function () {
  PubSub.subscribe("NumberFormView:submit", (event) => {
    const number = event.detail;
    const url = `http://numbersapi.com/${number}?json`;
    console.log(url);

    const request = new Request(url);
    request.get((numberData) => {
      console.log(numberData);
      PubSub.publish("NumberFacts:number-fact", numberData.text);
    })

  });
};

module.exports = NumberFacts;

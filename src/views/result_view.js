const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFacts:number-fact', (event) => {
    this.render(event.detail);
  });
};

ResultView.prototype.render = function (numberFact) {
  const p = document.createElement('p');
  p.textContent = numberFact;
  this.container.appendChild(p);
};

module.exports = ResultView;

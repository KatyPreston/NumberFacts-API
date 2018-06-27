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
  const firstSpace = numberFact.search(' ');
  const number = numberFact.substr(0,firstSpace);
  const text = numberFact.slice(firstSpace+1);

  const p = document.createElement('p');

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('number-fact__number');
  numberSpan.textContent = number;
  p.appendChild(numberSpan);

  const textSpan = document.createElement('span');
  textSpan.classList.add('number-fact__text');
  textSpan.textContent = text;
  p.appendChild(textSpan);

  this.container.appendChild(p);
};

module.exports = ResultView;

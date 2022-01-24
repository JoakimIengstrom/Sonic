const cards = document.querySelectorAll(`.memory-card`);

function flipCard() {
  console.log(`did I work?`);
  crossOriginIsolated.log(this);
}

cards.forEach((card) => card.addEventListener(`click`, flipCard));

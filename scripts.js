const cards = document.querySelectorAll(`.memory-card`);

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle(`flip`);

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;

    //check if they match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      // it´s a match
      firstCard.removeEventListener(`click`, flipCard);
      secondCard.removeEventListener(`click`, flipCard);
    } else {
      firstCard.classList.remove(`flip`);
      secondCard.classList.remove(`flip`);
    }
  }
}

cards.forEach((card) => card.addEventListener(`click`, flipCard));

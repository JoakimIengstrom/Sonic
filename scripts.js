document.addEventListener("DOMContentLoaded", () => {
  //card option
  const cardArray = [
    {
      name: "amy",
      img: "images/amy.png",
    },
    {
      name: "amy",
      img: "images/amy.png",
    },
    {
      name: "crocodile",
      img: "images/crocodile.png",
    },
    {
      name: "crocodile",
      img: "images/crocodile.png",
    },
    {
      name: "drEgg",
      img: "images/drEgg.png",
    },
    {
      name: "drEgg",
      img: "images/drEgg.png",
    },
    {
      name: "knuckle",
      img: "images/knuckle.png",
    },
    {
      name: "knuckle",
      img: "images/knuckle.png",
    },
    {
      name: "ring",
      img: "images/ring.png",
    },
    {
      name: "ring",
      img: "images/ring.png",
    },
    {
      name: "shadow",
      img: "images/shadow.png",
    },
    {
      name: "shadow",
      img: "images/shadow.png",
    },
    {
      name: "sonic",
      img: "images/sonic.png",
    },
    {
      name: "sonic",
      img: "images/sonic.png",
    },
    {
      name: "tails",
      img: "images/tails.png",
    },
    {
      name: "tails",
      img: "images/tails.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  let maxScore = cardArray.length / 2;

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let activeScore;

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/back.png");
      card.setAttribute("data-id", i);
      card.classList.add("card");
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  /* timerStart();
  {
    card.addEventListener("click", start, { once: true });

    function startTimer() {
      tens++;

      if (activeScore < maxScore / 2) {
        if (tens < 9) {
          appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
          appendTens.innerHTML = tens;
        }

        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
          appendSeconds.innerHTML = seconds;
        }
      }
    }
  } */

  /* const restart = () => {
    grid.remove(2);

    createBoard();
  }; */

  /*  const btn_new = document.getElementById("reset");
  //Save Score
  btn_new.addEventListener("click", resetBoard); */

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/back.png");
      cards[optionTwoId].setAttribute("src", "images/back.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      /* alert("You found a match"); */
      cards[optionOneId].setAttribute("src", "images/right.png");
      cards[optionTwoId].setAttribute("src", "images/right.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/back.png");
      cards[optionTwoId].setAttribute("src", "images/back.png");
      /* alert("Sorry, try again"); */
    }
    cardsChosen = [];
    cardsChosenId = [];
    activeScore = cardsWon.length;
    resultDisplay.textContent = activeScore.toString();

    if (activeScore == 8) {
      resultDisplay.textContent = activeScore + " - Great Job!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 555);
    }
  }

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");

  function start() {
    setInterval(startTimer, 10);
  }

  /*
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }; */

  createBoard();
});

document.getElementById("name").textContent += "Sonic Memory Game";

/* document.getElementById("score").textContent += " Score: "; */

/* var td1 = document.getElementById("name");
var name = document.createTextNode("Sonic Memory Game");
td1.appendChild(name);

var td2 = document.getElementById("score");
var score = document.createTextNode("Score: ");
td2.appendChild(score); */

/* const cards = document.querySelectorAll(`.memory-card`);

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
 */

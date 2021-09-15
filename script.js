document.addEventListener("DOMContentLoaded", () => {
  //add the time:- 5 minutes

  const cardArray = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(function () {
    return 0.5 - Math.random();
  });
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const messageDisplay = document.querySelector("#congrats-message");
  let chosenCards = [];
  let chosenCardsId = [];
  let score = 0;

  function createGrid() {
    for (let i = 0; i < cardArray.length; i++) {
      //create image element with the src of blank
      //dynamically we will create the image element
      //using createElement, we can create nodes in the dom tree dynamically
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i); //<img src="blank.png" data-id=3/>
      card.addEventListener("click", flip);
      grid.appendChild(card);
    }
  }

  function matchCards() {
    //Problems
    //1)Show a congratulatory message.

    const cards = document.querySelectorAll("img"); //accessed all the images in this variable
    let optionOneId = chosenCardsId[0];
    let optionTwoId = chosenCardsId[1];
    let optionThreeId = chosenCardsId[2];

    if (optionTwoId == optionOneId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cards[optionThreeId].setAttribute("src", "images/blank.png");
      alert("You have clicked on the same box");
    } else if (
      chosenCards[0].name == chosenCards[1].name &&
      chosenCards[1].name == chosenCards[2].name
    ) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionThreeId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flip);
      cards[optionTwoId].removeEventListener("click", flip);
      cards[optionThreeId].removeEventListener("click", flip);
      score = score + 1;
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cards[optionThreeId].setAttribute("src", "images/blank.png");
    }
    chosenCards = [];
    chosenCardsId = [];
    resultDisplay.textContent = score;
    if (score == cardArray.length / 2) {
      messageDisplay.textContent = "You found them all. Congrats";
    }
  }

  function flip() {
    //this refers to the particular image here
    let cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    chosenCards.push(cardArray[cardId]);
    chosenCardsId.push(cardId);
    //conditional statement
    if (chosenCards.length == 3) {
      //check for matching
      //Using settimeout, we can wait for a particular duration and after that we will call a particular function
      setTimeout(matchCards, 500);
    }
  }
  createGrid();
});

document.addEventListener("DOMContentLoaded", () => {
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
  ];
  cardArray.sort(function () {
    return 0.5 - Math.random();
  });
  const grid = document.querySelector(".grid");
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
  function flip() {
    console.log("card flipped");
    //this refers to the particular image here
    let cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    console.log(cardId);
  }
  createGrid();
});

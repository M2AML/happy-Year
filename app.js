//SELECTOR
const number2 = document.querySelectorAll(".first-block");
const number0 = document.querySelectorAll(".second-block");
const numberSecond2 = document.querySelectorAll(".third-block");
const numberThird2 = document.querySelectorAll(".fourth-block");
const letter = document.querySelectorAll(".letter");
let time;

/*CREATION OF STAR
function stars() {
  const starNumber = 200;
  const container = document.querySelector(".container");
  let i = 0;
  for (let i = 0; i < starNumber; i++) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerHeight);
    const y = Math.floor(Math.random() * window.innerWidth);

    const starSize = Math.random() * 4;
    star.style.top = x + "px";
    star.style.left = y + "px";
    star.style.width = 1 + starSize + "px";
    star.style.height = 1 + starSize + "px";
    const timeAnimation = Math.random() * 2;
    star.style.animationDuration = 2 + timeAnimation + "s";
    star.style.animationDelay = 2 + timeAnimation + "s";
    container.appendChild(star);
  }
}*/

//INITIALIZATION POSITION RANDOM BLOCKS OF NUMBER AND START MOVING
function start(nb) {
  for (let i = 0; i < nb.length; i++) {
    const element = nb[i];
    positionX = Math.random() * 100;
    positionY = Math.random() * 100;
    if (i % 2 === 0) {
      element.style.top = positionX + "%";
    } else {
      element.style.left = positionY + "%";
    }
    element.style.opacity = "0";
  }
}

//NUMBER MOVING END
function moveNumber(nb) {
  for (let i = 0; i < nb.length; i++) {
    const element = nb[i];
    time = Math.random() + 2;
    element.style.setProperty("--time", time + "s");
    if (i % 2 === 0) {
      element.style.removeProperty("top");
    } else {
      element.style.removeProperty("left");
    }
    element.style.opacity = "1";
  }
}

//INITIALIZATION POSITION RANDOM LETTER AND START MOVING
function lettermove() {
  for (let i = 0; i < letter.length; i++) {
    const element = letter[i];
    positionTop = Math.random() * 600 + 100;
    positionLeft = Math.random() * 600 + 100;
    if (i % 2 === 0) {
      element.style.setProperty("--top", Math.floor(positionTop) + "px");
    } else {
      element.style.setProperty("--left", Math.floor(positionLeft) + "px");
    }
    element.style.opacity = 0;
  }
}

//LETTER MOVING END
function letterStart() {
  for (let i = 0; i < letter.length; i++) {
    const element = letter[i];
    element.style.setProperty("--top", 0 + "px");
    element.style.setProperty("--left", 0 + "px");
    element.style.opacity = 1;
  }
}

letter.forEach((item) => {
  item.addEventListener("transitionend", () => {
    moveNumber(number2);
    moveNumber(number0);
    moveNumber(numberSecond2);
    moveNumber(numberThird2);
  });
});
//CALL FUNCTIONS
start(number2);
start(number0);
start(numberSecond2);
start(numberThird2);
lettermove();
stars();

setTimeout(() => {
  letterStart();
}, 700);

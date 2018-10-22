/*
 *  @description variable declaration block
 */
const resetButton = document.getElementById('reset');
const starWrapper = document.getElementById('stars');
const stars = [...document.getElementsByClassName('star')];
const moves = document.getElementById('counter');
const timer = document.getElementById('timer');
const replayGame = document.getElementById('replay');
let cards = [...document.getElementsByClassName('card')];
let cardWrapper = document.getElementsByClassName('cards')[0];
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close');
let timeSummary = document.getElementById('timeSummary');
let counterSummary = document.getElementById('counterSummary');
let starsSummary = document.getElementById('starsSummary');
let firstCard; //holds the first card
let secondCard; //holds the second card
let isFlipped = false; //this checks when a card is flipped or not
let matchCards = 0; //this is first initialized to later hold all the matched cards which is used to end the game
let count = 0; //this is first initialized to subsequently hold the number of moves
let timeUpdate; //holds the setTimeout
let hours = 0; //holds the hours
let minutes = 0; // holds the minutes
let seconds = 0; //holds the seconds

function time() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timeCounter();
}

function timeCounter() {
  timeUpdate = setTimeout(time, 1000);
}

function reset() {
  //clear the time
  clearTimeout(timeUpdate, 1000);
  timer.textContent = `00:00:00`;
  //reset all the modal variables
  emptyVariables();
  [matchCards, count, moves.textContent] = [0, 0, `0 Move(s)`];
  [hours, minutes, seconds] = [0, 0, 0];
  //refill all the stars
  for (star of stars) {
    if (star.classList = 'stared') star.classList.add('stared');
  }
  //shuffle cards
  cards = shuffleCard(cards);
  //empty the card list
  cardWrapper.innerHTML = "";
  //undo card flip
  for (card of cards) {
    cardWrapper.appendChild(card);
    card.classList.remove('open', 'match', 'notMatch');
  }
}

//binding the game reset button
resetButton.addEventListener('click', reset, false);

//reset game on document loaded
document.addEventListener('DOMContentLoaded', reset, false);

function shuffleCard(cardArray) {
  let currentIndex = cardArray.length;
  let shuffled;
  let temp;

  while (currentIndex != 0) {
    shuffled = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temp = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[shuffled];
    cardArray[shuffled] = temp;
  }

  return cardArray;
}

function showCard() {
  if (this === firstCard) return;

  if (timer.textContent === `00:00:00`) timeCounter();

  this.classList.add('open');

  if (!isFlipped) {
    //first click
    isFlipped = true;
    firstCard = this;
    return;
  }

  //second click
  secondCard = this;

  //check if the flipped cards matched
  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    match();
  } else {
    notMatch();
  }

  //increase the count Variable
  count++;
  //update the move counter of the game
  moves.textContent = `${count} Move(s)`;
  //remove one star every five(5) counts
  removeStar();
}

function match() {
  firstCard.classList.add('match');
  secondCard.classList.add('match');

  matchCards += 2;
  if (matchCards === 16) {
    gameOver();
  }

  emptyVariables()
}

function notMatch() {
  firstCard.classList.add('notMatch');
  secondCard.classList.add('open', 'notMatch');

  setTimeout(() => {
    firstCard.classList.remove('open', 'notMatch');
    secondCard.classList.remove('open', 'notMatch');

    emptyVariables();
  }, 550);
}

function removeStar() {
  [firstStar, secondStar, thirdStar, fourthStar, fifthStar] = [...stars];
  //reduce at every five count
  if (count === 5) fifthStar.classList.remove('stared');
  if (count / 2 === 5) fourthStar.classList.remove('stared');
  if (count / 3 === 5) thirdStar.classList.remove('stared');
  if (count / 4 === 5) secondStar.classList.remove('stared');
}

function emptyVariables() {
  [firstCard, secondCard, isFlipped] = [undefined, undefined, false];
}

function gameOver() {
  modal.classList.remove('hide');
  timeSummary.textContent = timer.textContent;
  starsSummary.innerHTML = starWrapper.innerHTML;
  counterSummary.innerHTML = moves.textContent;
  clearTimeout(timeUpdate);
}

modal.addEventListener('click', (evt) => {
  if (evt.target === modal) exitModal();
}, false);

closeModal.addEventListener('click', exitModal, false);

function exitModal() {
  modal.classList.add('hide');
  //reset game
  reset();
}

//binding the modal replay button for click event
replayGame.addEventListener('click', exitModal, false);

cards.forEach(card => card.addEventListener('click', showCard, false));
const createDeck = () => {
  const DECK = [];
  const cards = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  for (const card of cards) {
    for (const suit of suits) {
      DECK.push({
        card: card,
        suit: suit,
        image: `./assets/images/${card}_of_${suit}.png`,
      });
    }
  }
  return DECK;
};

//  VARIABLES  //
const deck = createDeck();
const dealerCardsInHand = [];
let dealerScore = 0;
const playersCardsInHand = [];
let playerScore = 0;

//  SELECTORS  //
const dealerHand = document.querySelector('.dealer_hand');
const displayDealerScore = document.querySelector('#dealer_score');
const playerHand = document.querySelector('.player_hand');
const displayPlayerScore = document.querySelector('#player_score');
const buttonStand = document.querySelector('#stand');
const buttonHit = document.querySelector('#hit');

// return card as object
const drawCard = (deck) => {
  const randomNumber = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomNumber, 1);

  return card[0];
};

const createDealersCards = () => {
  dealerHand.innerHTML = '';
  dealerScore = 0;
  for (const card of dealerCardsInHand) {
    const createCard = document.createElement('img');
    createCard.src = card.image;
    createCard.classList.add('card');
    dealerHand.appendChild(createCard);
    dealerScore += showScore(card.card);
  }
  displayDealerScore.textContent = dealerScore;
};

const createPlayersCards = () => {
  playerHand.innerHTML = '';
  playerScore = 0;
  for (const card of playersCardsInHand) {
    const createCard = document.createElement('img');
    createCard.src = card.image;
    createCard.classList.add('card');
    playerHand.appendChild(createCard);
    playerScore += showScore(card.card);
  }
  displayPlayerScore.textContent = playerScore;
};

const showScore = (cardInHand) => {
  let score = 0;
  if (
    cardInHand === 'J' ||
    cardInHand === 'Q' ||
    cardInHand === 'K' ||
    cardInHand === 'A'
  ) {
    score = 10;
  } else {
    score = Number(cardInHand);
  }

  return score;
};

const showMessage = (text) => {
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = text;
  document.body.appendChild(message);
};

const hit = () => {
  playersCardsInHand.push(drawCard(deck));
  createPlayersCards();
  if (playerScore > 21) {
    checkScore();
  }
};

const checkScore = () => {
  let i = true;
  while (i) {
    if (dealerScore <= playerScore && playerScore <= 21) {
      dealerCardsInHand.push(drawCard(deck));
      createDealersCards();
      if (dealerScore > 21 && dealerScore > playerScore) {
        i = false;
      }
    } else if (dealerScore >= playerScore) {
      i = false;
    } else {
      i = false;
    }
  }
  if (playerScore === 21) {
    showMessage('You win!!');
  } else if (dealerScore === 21) {
    showMessage('You loose!!');
  } else if (dealerScore > 21) {
    showMessage('You win!!');
  } else if (playerScore > 21) {
    showMessage('You loose!!');
  } else if (playerScore > dealerScore) {
    showMessage('You win!!');
  } else if (playerScore === dealerScore) {
    showMessage('Draw');
  } else {
    showMessage('You loose!!');
  }
  buttonStand.removeEventListener('click', checkScore);
  buttonHit.removeEventListener('click', hit);
};

const standOrHit = () => {
  buttonStand.addEventListener('click', checkScore);
  buttonHit.addEventListener('click', hit);
};

const initialDealingCards = () => {
  // deals 2 card to dealer and player
  dealerCardsInHand.push(drawCard(deck));
  dealerCardsInHand.push(drawCard(deck));
  playersCardsInHand.push(drawCard(deck));
  playersCardsInHand.push(drawCard(deck));

  createDealersCards();
  createPlayersCards();

  standOrHit();
};

initialDealingCards();

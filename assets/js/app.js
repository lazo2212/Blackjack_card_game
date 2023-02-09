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
const buttonStay = document.querySelector('#stay');
const buttonHit = document.querySelector('#hit');

// return card as object
const drawCard = (deck) => {
  const randomNumber = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomNumber, 1);

  return card[0];
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

const checkScore = () => {
  if (playerScore === 21) {
    showMessage('You win!!');
  } else if (dealerScore === 21) {
    showMessage('You loose!!');
  } else {
    showMessage('next');
  }
};

const standOrHit = () => {
  buttonStay.addEventListener('click', () => {
    checkScore();
  });
};

const initialDealingCards = () => {
  // deals 2 card to dealer and player
  dealerCardsInHand.push(drawCard(deck));
  dealerCardsInHand.push(drawCard(deck));
  playersCardsInHand.push(drawCard(deck));
  playersCardsInHand.push(drawCard(deck));

  // create dealers cards
  for (const card of dealerCardsInHand) {
    const createCard = document.createElement('img');
    createCard.src = card.image;
    createCard.classList.add('card');
    dealerHand.appendChild(createCard);
    dealerScore += showScore(card.card);
  }

  // create players cards
  for (const card of playersCardsInHand) {
    const createCard = document.createElement('img');
    createCard.src = card.image;
    createCard.classList.add('card');
    playerHand.appendChild(createCard);
    playerScore += showScore(card.card);
  }

  displayDealerScore.textContent = dealerScore;
  displayPlayerScore.textContent = playerScore;

  //igrač izabire da li ce ostati na istim kartama ili ce callat jos jednu
  standOrHit();
};

initialDealingCards();

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
const buttonCall = document.querySelector('#call');

// return card as object
const drawCard = (deck) => {
  const randomNumber = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomNumber, 1);

  return card[0];
};

const initialDealingCards = () => {
  // podijeliti svakom igraču po dvije karte s time da je dilereva druga karta okrenuta prema dolje
  //igrač izabire da li ce ostati na istim kartama ili ce callat jos jednu
};

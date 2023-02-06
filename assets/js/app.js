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

////////////////////////////////////////////////////////////////
// TEST - adding some cards to style table
const dealer = document.querySelector('.dealer_container');
const player = document.querySelector('.player_container');

let card1 = document.createElement('img');
card1.classList.add('card');
card1.src = deck[48].image;
dealer.appendChild(card1);

let card2 = document.createElement('img');
card2.classList.add('card');
card2.src = deck[49].image;
dealer.appendChild(card2);

let card3 = document.createElement('img');
card3.classList.add('card');
card3.src = deck[48].image;
player.appendChild(card3);

let card4 = document.createElement('img');
card4.classList.add('card');
card4.src = deck[49].image;
player.appendChild(card4);

let card5 = document.createElement('img');
card5.classList.add('card');
card5.src = deck[50].image;
player.appendChild(card5);

let card6 = document.createElement('img');
card6.classList.add('card');
card6.src = deck[51].image;
player.appendChild(card6);
////////////////////////////////////////////

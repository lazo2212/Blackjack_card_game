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

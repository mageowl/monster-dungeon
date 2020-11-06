const deckCount = document.getElementById("deck-count");

let deck = [
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball",
	"slash",
	"bowArrow",
	"fireball"
];

export function getDeck() {
	return deck;
}

export function removeFromDeck(index) {
	deckCount.innerHTML = deck.length - 1;
	return deck.splice(deck.indexOf(index), 1)[0];
}

export function addToDeck(card) {
	deck.push(card);
	return deck;
}

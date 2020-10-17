import { createCard, genCards } from "./assets/scripts/genCards.js";
import { createCharecter, getCharecters } from "./assets/scripts/charecters.js";
import { charecters } from "./assets/scripts/enemies.js";

const hand = [];

const handEl = document.getElementById("hand");

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

window.addEventListener("load", () => {
	// Charecters
	createCharecter(
		charecters.player,
		document.querySelector("#battlefield > #player")
	);

	createCharecter(
		charecters.blob,
		document.querySelector("#battlefield > #enemy")
	);

	console.log(
		getCharecters(),
		Object.values(getCharecters()).filter((o) => o.isPlayer)
	);

	// Hand
	let gen = genCards(deck, 3);
	deck = gen.pool;
	gen.cards.forEach((card) => {
		hand.push(card.cardData);
		handEl.appendChild(card.el);
	});
});

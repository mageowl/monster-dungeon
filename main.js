import { createCard, genCards } from "./assets/scripts/genCards.js";
import {
	createCharecter,
	getCharecters,
	charecterTypes
} from "./assets/scripts/charecters.js";
import { getDeck } from "./assets/scripts/deck.js";

const hand = [];

const handEl = document.getElementById("hand");

window.addEventListener("load", () => {
	// Charecters
	createCharecter(
		charecterTypes.player,
		document.querySelector("#battlefield > #player")
	);

	createCharecter(
		charecterTypes.snake,
		document.querySelector("#battlefield > #enemy")
	);

	// Hand
	genCards(3).forEach((card) => {
		hand.push(card.cardData);
		handEl.appendChild(card.el);
	});
});

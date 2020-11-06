import { enemyTurn } from "./enemyTurn.js";
import { checkDeath } from "./death.js";

export const turn = {
	PLAYER: "playerTurn",
	ENEMY: "enemyTurn"
};

let currentTurn = turn.PLAYER;
const hand = document.getElementById("hand");

export function getTurn() {
	return currentTurn;
}

export function nextTurn() {
	hand.classList.remove(currentTurn);
	currentTurn = currentTurn == turn.PLAYER ? turn.ENEMY : turn.PLAYER;
	hand.classList.add(currentTurn);

	checkDeath();

	if (currentTurn == turn.ENEMY) {
		enemyTurn();
		setTimeout(() => {
			nextTurn();
		}, 100);
	}

	return currentTurn;
}

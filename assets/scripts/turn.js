import { enemyTurn } from "./enemyTurn.js";

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

	// if (currentTurn == turn.ENEMY) enemyTurn().then(nextTurn());

	return currentTurn;
}

import { getCharecters, updateCharecters } from "./charecters.js";
import { compileEffects } from "./effects.js";

export function enemyTurn() {
	let charecters = getCharecters();

	Object.values(charecters)
		.filter((char) => char.side == "enemy")
		.forEach((char) => {});

	updateCharecters(charecters);
}

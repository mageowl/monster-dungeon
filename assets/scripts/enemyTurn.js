import { getCharecters, updateCharecters } from "./charecters.js";
import { compileEffects } from "./effects.js";

export function enemyTurn() {
	let charecters = getCharecters();
	console.log(charecters);

	function runAI(ai) {
		console.log(ai);
		switch (ai.type) {
			case "effect":
				charecters = compileEffects(ai.effects, getCharecters(), "enemy");
		}
	}

	Object.values(charecters)
		.filter((char) => char.side == "enemy")
		.forEach((char) => {
			runAI(char.turnAI);

			char.el.style.animation = "enemy-attack 200ms";
			setTimeout(() => {
				char.el.style.animation = "";
			}, 200);
		});

	updateCharecters(charecters);
}

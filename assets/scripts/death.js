import { getCharecters, killCharecter } from "./charecters.js";

export function checkDeath() {
	let charecters = getCharecters();

	for (const key in charecters) {
		if (charecters.hasOwnProperty(key)) {
			const charecter = charecters[key];

			if (charecter.hp <= 0) {
				killCharecter(key);
			}
		}
	}
}

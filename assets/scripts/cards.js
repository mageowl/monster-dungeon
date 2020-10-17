import { effectType } from "./effects.js";

export const cards = {
	slash: {
		name: "Slash",
		img: "./assets/art/cards/sword.png",
		effects: [{ type: effectType.MELEE_DAMAGE, damage: 1 }]
	},
	bowArrow: {
		name: "Bow and Arrow",
		img: "./assets/art/cards/bow.png",
		effects: [{ type: effectType.RANGED_DAMAGE, damage: 2 }]
	},
	fireball: {
		name: "Fireball",
		img: "./assets/art/cards/fireball.png",
		effects: [
			{ type: effectType.RANGED_DAMAGE, damage: 1 },
			{ type: effectType.BURN }
		]
	}
};

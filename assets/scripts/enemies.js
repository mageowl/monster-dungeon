import { effectType } from "./effects.js";

export const charecters = {
	blob: {
		name: "Blob",
		hp: 2,
		maxHP: 2,
		turnAI: {
			type: "effect",
			effects: [{ type: effectType.MELEE_DAMAGE, damage: 1 }]
		},
		img: "./assets/art/charecters/blob.png",
		id: "blob"
	},
	player: {
		name: "Player",
		hp: 20,
		maxHP: 20,
		img: "./assets/art/charecters/player-basic.png",
		id: "player"
	}
};

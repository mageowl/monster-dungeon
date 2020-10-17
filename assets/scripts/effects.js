import { deepCopy } from "./deepCopy.js";

export const effectType = {
	MELEE_DAMAGE: "melee-damage",
	RANGED_DAMAGE: "ranged-damage",
	BURN: "burn"
};

export function compileEffects(effects, charecters) {
	let charectersCopy = deepCopy(charecters);

	for (const effect of effects) {
		let target;

		switch (effect.type) {
			case effectType.MELEE_DAMAGE: {
				target = Object.values(charectersCopy).filter(
					(o) => o.position == 0 && o.side == "enemy"
				)[0];
				console.log(target.el);
				target.hp = Math.max(target.hp - effect.damage, 0);
				break;
			}

			case effectType.RANGED_DAMAGE: {
				let min = -1;
				target = Object.values(charectersCopy).filter((o) => {
					let viable = o.position >= min && o.side == "enemy";
					if (viable) min = o.position;
					return viable;
				})[0];
				target.hp = Math.max(target.hp - effect.damage, 0);
				break;
			}

			default:
				break;
		}
	}

	return charectersCopy;
}

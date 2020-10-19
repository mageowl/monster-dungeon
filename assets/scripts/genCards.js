import { cards } from "./cards.js";
import { getCharecters, updateCharecters } from "./charecters.js";
import { effectType, compileEffects } from "./effects.js";
import { getTurn, nextTurn, turn } from "./turn.js";

export function genCards(pool, qty = 1) {
	let elements = [];
	let resultPool = [...pool];

	for (let i = 0; i < qty; i++) {
		let cardName = resultPool.splice(
			Math.floor(Math.random() * resultPool.length),
			1
		)[0];
		let cardData = cards[cardName];

		elements.push({ el: createCard(cardData, pool), cardData });
	}

	return { cards: elements, pool: resultPool };
}

export function createCard(data, pool) {
	let el = document.createElement("div");
	el.classList.add("card");
	el.onclick = () => {
		if (getTurn() == turn.ENEMY) return;

		updateCharecters(compileEffects(data.effects, getCharecters(), "player"));

		Object.values(getCharecters()).filter(
			(o) => o.side == "player"
		)[0].el.style.animation = "player-attack 200ms";

		el.style.opacity = 0;
		setTimeout(() => {
			document
				.getElementById("hand")
				.insertBefore(genCards(pool, 1).cards[0].el, el);

			el.remove();
			nextTurn();
		}, 400);
	};
	setTimeout(() => {
		el.style.top = 0;
	}, 10);

	let name = document.createElement("span");
	name.classList.add("name");
	name.innerHTML = data.name;

	let icon = document.createElement("img");
	icon.classList.add("icon");
	icon.src = data.img;

	let description = document.createElement("div");
	description.classList.add("description");
	description.innerHTML = createDescription(data.effects);

	el.appendChild(name);
	el.appendChild(icon);
	el.appendChild(description);
	return el;
}

function createDescription(effects) {
	let description = "";

	effects.forEach((effect, i) => {
		switch (effect.type) {
			case effectType.MELEE_DAMAGE:
				description += `${effect.damage} melee damage`;
				break;

			case effectType.RANGED_DAMAGE:
				description += `${effect.damage} ranged damage`;
				break;

			case effectType.BURN:
				description += `Target burned`;

			default:
				break;
		}

		if (i < effects.length - 1) description += ", ";
		else description += ".";
	});

	return description;
}

// <div class="card">
//  <span class="name">Test Card</span>
//  <img class="icon" src="assets/art/charecters/player-basic.png" />
//  <div class="description">Nothing for the price of one.</div>
// </div>

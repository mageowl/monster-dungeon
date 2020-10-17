import { deepCopy } from "./deepCopy.js";

let charecters = {};

export function createCharecter(type, parent) {
	let data = deepCopy(type);
	if (typeof type == "string") data = deepCopy(enemies[type]);

	let el = document.createElement("div");
	el.classList.add("charecter");

	let name = document.createElement("span");
	name.classList.add("name");
	name.innerHTML = data.name;
	el.appendChild(name);

	let hpBar = document.createElement("div");
	hpBar.classList.add("hp");
	el.appendChild(hpBar);

	let hpBarInner = document.createElement("span");
	hpBarInner.classList.add("bar");
	hpBarInner.style.width = "100%";
	hpBar.appendChild(hpBarInner);

	let hpBarValue = document.createElement("span");
	hpBarValue.innerHTML = `${data.maxHP}/${data.maxHP}`;
	hpBarInner.appendChild(hpBarValue);

	let image = document.createElement("img");
	image.classList.add("img");
	image.src = data.img;
	el.appendChild(image);

	parent.appendChild(el);

	charecters[
		`${type.id}${
			Object.keys(charecters).filter((k) => k.startsWith(type.id)).length
		}`
	] = {
		...data,
		side: parent.id,
		position: Array.from(parent.children).indexOf(el),
		el
	};

	return el;
}

export function getCharecters() {
	return charecters;
}

export function updateCharecters(newCharecters) {
	charecters = newCharecters;
	Object.values(newCharecters).forEach((obj) => {
		let hpBar = obj.el.querySelector(".hp .bar");
		hpBar.innerHTML = `<span>${obj.hp}/${obj.maxHP}</span>`;
		hpBar.style.width = `${(100 * obj.hp) / obj.maxHP}%`;
	});
}

//<div class="charecter">
//	<span class="name">Player</span>
//	<div class="hp">
//		<span class="bar" style="width: 100%">
//			<span>20/20</span>
//		</span>
//	</div>
//	<img class="img" src="assets/art/charecters/player-basic.png" />
//</div>

export function deepCopy(obj) {
	if (typeof obj == "object") {
		if (Array.isArray(obj)) {
			return obj.map(deepCopy);
		} else if (obj instanceof HTMLElement) {
			return obj;
		} else {
			let result = {};
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					result[key] = deepCopy(obj[key]);
				}
			}

			return result;
		}
	} else return obj;
}

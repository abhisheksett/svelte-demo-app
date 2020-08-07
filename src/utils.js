export function pick_random(array) {
	const index = Math.floor(array.length * Math.random());
	return array[index];
}

export const sleep = (ms) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	})
}

export const load_image = src => {
	return new Promise((fulfill, reject) => {
		const img = new Image();
		img.onload = fulfill(src);
		img.onerror = reject();
		img.src = src;
	});
}
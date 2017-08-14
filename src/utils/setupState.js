let state = {};

export function init(config) {
	state = config;
}

export function getState() {
	return state;
}

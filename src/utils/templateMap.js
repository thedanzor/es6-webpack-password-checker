let importedViews = {};

export function viewInit(views) {
	importedViews = views;
}

export function viewTemplate(type) {
	let view = importedViews['defaultView'];

	if (importedViews[type]) {
		view = importedViews[type];
	}

	return view;
}

'use strict';

// THIS IS A SAMPLE PROJECT TO SHOWCASE ES6 AND SOME OF ITS FEATURES,
// HOW IT CAN BE USED TO MAKE 3RD PARTY APPLICATIONS IN A STABLE AND
// MORE SECURE WAY.
//
// NOTE: THIS IS OVER-ENGINEERED FOR THE PURPOSE OF SHOWCASING SAID FEATURES

// Require the app
import passwordChecker from './App';

// For building the css
require('./css/style.scss');

// We are using the window object to house and execute the script

// This is a practise i have gotten into to avoid methods being called
// accidently, but still accessible to execute when intended.
window.mySite = window.mySite || {};
window.mySite['passwordChecker'] = function(config) {
	const container = document.querySelector('#passwordChecker');

	// Building objects for configuration instead of arguments is a
	// much cleaner approach IMO. (CONFIG IS AN OBJECT)
	passwordChecker(container, config);
};

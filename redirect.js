console.log("it's on");

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var newUrl = '';
		switch (details.url) {
			// urls that are not exact match
			case "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js":
				newUrl = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.19/angular.min.js";	// angularjs -> angular.js
				break;
			default:
				newUrl = "https://cdnjs.cloudflare.com" + details.url.substring(details.url.indexOf(".com") + 4);
		}
		console.log("Switch URL to " + newUrl);
		return { redirectUrl: newUrl };
	},
	{urls: [
		"*://ajax.googleapis.com/*"
	]},
	["blocking"]
);
console.log("it's on");

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var oldUrl = details.url;
		// parse the old one
		var mark = "libs/";
		var target = oldUrl.substring(oldUrl.indexOf(mark) + mark.length);
		console.log(target);
		var parts = target.split("/");
		var lib = parts[0];
		var ver = parts[1];
		var file = parts[2];
		console.log(parts);
		//
		var newLib = '';
		switch (lib) {
			case "angularjs":
				newLib = "angular.js";
				break;
			default:
				newLib = lib;
		}
		var newUrl = "https://cdnjs.cloudflare.com/ajax/libs/" + newLib + "/" + ver + "/" + file;
		console.log("Switch URL to " + newUrl);
		return { redirectUrl: newUrl };
	},
	{urls: [
		"*://ajax.googleapis.com/*"
	]},
	["blocking"]
);
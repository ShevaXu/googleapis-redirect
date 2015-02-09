console.log("it's on");

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		//console.log(details.url);
		if( details.url == "http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js" ) {
			console.log(details.url);
			return { redirectUrl: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js" };
		}
	},
	{urls: [
		"*://ajax.googleapis.com/*"
	]},
	["blocking"]
);
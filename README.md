## Chrome Extension for URL canceling and Redirecting

It's really annoying not able to access ANY of Google's services. And it becomes worse that many sites use Google's Ajax APIs for js/css files, e.g., failing to requesting *jQuery.js* will corrupt the whole site! Meanwhile, some assets are not necessary for viewing the content but somehow made blocking, e.g., fonts & google-analytics.

So I try to fix these by building a chrome extension that can:

* redirect requests made towards *ajax.googleapis.com* to a new host, e.g., *cdnjs.cloudflare.com*, providing some matching rules;
* cancel unnecessary blocking requests.

Modify/add your own hosts and rule as you wish :P

Refs (most from starckoverflow):

* [modify page script](http://stackoverflow.com/questions/10075620/chrome-extension-to-modify-pages-script-includes-and-js)
* [webrequest not working](http://stackoverflow.com/questions/15502691/chrome-webrequest-not-working)
* [WebRequest API](http://www.adambarth.com/experimental/crx/docs/webRequest.html)
* accessible cdn js files -- [cdnjs](https://cdnjs.com/)
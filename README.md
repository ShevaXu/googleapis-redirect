## Chrome extension for redirecting Google APIs ajax request 

It's really annoying not able to access ANY of Google's services. And it becomes worse that many sites use Google's ajax apis for js/css files. I soon realized that if the request for important assets, say, *jQuery.js*, fails, the whole site might crash!

So I try to fix this by building a chrome extension ...

Refs (most from starckoverflow):

* [modify page script](http://stackoverflow.com/questions/10075620/chrome-extension-to-modify-pages-script-includes-and-js)
* [webrequest not working](http://stackoverflow.com/questions/15502691/chrome-webrequest-not-working)
* [WebRequest API](http://www.adambarth.com/experimental/crx/docs/webRequest.html)
* accessible cdn js files -- [cdnjs](https://cdnjs.com/)
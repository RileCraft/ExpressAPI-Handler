# ExpressAPI-Handler
A Handler for APIs made in Express.<br>
<a href="https://discord.com/users/427109850368049162"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=black"/></a>
![Version](https://img.shields.io/badge/version-1.0.0-05122A?style=for-the-badge)
<center><img src="https://media.discordapp.net/attachments/774290264764055582/893049042471370752/1632989865295.png" height: auto width:650></center>

# Features
* Easier management of all APIs at once.
* Better and organized format for your Endpoints.
* Easy to customize.
* All brackets and things labelled for easier modification.

# Setup / Configuration
Edit the `config.json` file and fill the contents of it.
* `port`: The port at which your server will be hosted on.
* `rateLimit`: The time (in ms) in which the `maxRequests` option will be initiated.
* `maxRequests`: The maximum number of requests allowed in the set time of `rateLimit`.
* `errorMessage`: The message which will be displayed when the user reached ratelimit on the API.

# Format of Endpoints
```js
module.exports = {
	name: "Meme", // Name of the API. Not really needed but you can keep it.
	url: "/fun/meme", // The url at which the API will be accessable. Eg: https://localhost/fun/meme
	run: async(req, res) => {

	hdbdbdbdbhd // Enter your code.
	
	}
	     } 
```
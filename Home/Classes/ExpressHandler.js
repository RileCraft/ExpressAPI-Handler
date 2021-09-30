const config = require(rootPATH + "/config.json")
const express = require("express")
const chalk = require('chalk')
const router = express.Router()
const server = express()
server.set('json spaces', 2) // JSON Formatting.
server.listen(config.port, () => console.log(chalk.bold.cyan("[BackEnd] ") + chalk.bold.magentaBright("API has been initiated on port " + config.port)) ) 
const rateLimit = require("express-rate-limit")
const { FileManager } = require(rootPATH + "/Home/Functions/FileManager")
const fs = require('fs')

class expressHandler {
        static loadAPIs() {
        FileManager (apiPATH, function (err, ah) {
  ah.forEach(file => {
  	if (fs.statSync(file).isDirectory() && !file.endsWith(".js")) return;
  const API = require(file)
  if (!API.noRateLimit) {
const limiter = rateLimit({
windowMs: config.rateLimit, 
max: config.maxRequests, 
message: config.errorMessage 
   }) // Limiter End
server.use(API.url, limiter)
  	} // if End
  	server.get(API.url, (req, res) => {
API.run(req, res)
  	}) // server.get end
  }) // ah.forEach() End
}) // FileManager End 
        } // loadAPIs End
        

	} // Class End
	
module.exports = {
		expressHandler
		}
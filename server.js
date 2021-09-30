global.rootPATH = __dirname
global.apiPATH = __dirname + "/Home/Endpoints"

const { expressHandler } = require(__dirname + "/Home/Classes/ExpressHandler");
expressHandler.loadAPIs()     // LOADAPIS HANDLER
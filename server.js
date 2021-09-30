const { expressHandler } = require(__dirname + "/Home/Classes/ExpressHandler");
global.rootPATH = __dirname
global.apiPATH = __dirname + "/Home/Endpoints"

expressHandler.loadAPIs()     // LOADAPIS HANDLER
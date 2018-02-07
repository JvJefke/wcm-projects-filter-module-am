"use strict";

const projectsController = require("../controllers/projects");
const mapController = require("../controllers/map");

// Get the configuration of the WCM
const config = require("@wcm/module-helper").getConfig();


// Building the baseUrl based on the configuration. Every API call needs to be located after the api/ route
const baseUrl = "/" + config.api.prefix + config.api.version + "projects-am";

module.exports = (app) => {

	app.route(baseUrl + "/projects").post(projectsController.filtered);
	app.route(baseUrl + "/map").post(mapController.filtered);

}

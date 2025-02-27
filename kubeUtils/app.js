"use strict";

const req = require("./requestHandler");
let e = {};

e.namespace = require("./namespace")
e.deployment = require("./deployment")
e.service = require("./service")
e.docker = require("./docker");
e.imagePullSecret = require("./imagePullSecret");
e.check = () => req.get("/apis");

module.exports = e;
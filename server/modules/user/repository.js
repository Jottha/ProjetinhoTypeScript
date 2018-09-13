"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var schema_1 = require("./schema");
exports["default"] = mongoose.model('User', schema_1["default"]);

"use strict";
exports.__esModule = true;
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) { return res.status(200).json({ 'message': 'Hello, world!' }); });
        this.app.route('/test').get(function (req, res) { return res.status(200).json({ 'message': 'Rota /test está funcionando' }); });
    };
    return App;
}());
;
exports["default"] = new App();

"use strict";
exports.__esModule = true;
var controller_1 = require("./controller");
var httpStatus = require("http-status");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    ;
    UserRoutes.prototype.getAll = function (req, res) {
        controller_1["default"]
            .getAll()
            .then(function (users) { return sendResponse(res, httpStatus.OK, users); })["catch"](function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    ;
    UserRoutes.prototype.getById = function (req, res) {
        var id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado!');
        }
        ;
        controller_1["default"]
            .getById(id)
            .then(function (user) { return sendResponse(res, httpStatus.OK, user); })["catch"](function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    ;
    UserRoutes.prototype.create = function (req, res) {
        var user = req.body;
        controller_1["default"]
            .create(user)
            .then(function (user) { return sendResponse(res, httpStatus.CREATED, 'Usuario criado com sucesso!'); })["catch"](function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    ;
    UserRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var user = req.body;
        controller_1["default"]
            .update(id, user)
            .then(function (user) { return sendResponse(res, httpStatus.OK, 'Usuario atualizado!'); })["catch"](function (err) { return console.error.bind(console, "Errp: " + err); });
    };
    ;
    UserRoutes.prototype["delete"] = function (req, res) {
        var id = { _id: req.params.id };
        controller_1["default"]["delete"](id)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })["catch"](function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    ;
    return UserRoutes;
}());
;
exports["default"] = new UserRoutes();

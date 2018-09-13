"use strict";
exports.__esModule = true;
var repository_1 = require("./repository");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    ;
    UserController.prototype.getAll = function () {
        return repository_1["default"].find({});
    };
    ;
    UserController.prototype.getById = function (id) {
        return repository_1["default"].findById(id);
    };
    ;
    UserController.prototype.create = function (user) {
        return repository_1["default"].create(user);
    };
    ;
    UserController.prototype.update = function (id, user) {
        var updateUser = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        return repository_1["default"].findByIdAndUpdate(id, updateUser);
    };
    ;
    UserController.prototype["delete"] = function (id) {
        return repository_1["default"].remove(id);
    };
    ;
    return UserController;
}());
;
exports["default"] = new UserController();

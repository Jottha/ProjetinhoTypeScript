"use strict";
exports.__esModule = true;
var app_1 = require("./app");
app_1["default"].app.listen(3000, function () { return console.log('Servidor está rodando na porta 3000'); });
process.once('SIGUSR2', function () { return app_1["default"].closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return app_1["default"].closeDataBaseConnection('execução interrompida', function () { return process.exit(0); }); });

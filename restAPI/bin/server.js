"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 8080;
var tamanho = express.Router();
var saboresPequena = express.Router();
var saboresMedia = express.Router();
var saboresGrande = express.Router();
var logon = express.Router();
app.get('/', function (req, res) {
    res.send('Bem-vindo à home page!');
});
app.get('/tamanhos', function (req, res) {
    res.json([{ "id": 1, "name": "Pequeno", "quantidade_sabores": 1 }, { "id": 2, "name": "Médio", "quantidade_sabores": 2 }, { "id": 3, "name": "Grande", "quantidade_sabores": 3 }]);
});
app.get('/sabores/1', function (req, res) {
    res.json([{ "sabor": "Calabresa", "preco": 12 }, { "sabor": "Quatro Queijos", "preco": 15 }, { "sabor": "Bacon", "preco": 13 }, { "sabor": "Chocolate", "preco": 14 }, { "sabor": "Brocolis", "preco": 16 }]);
});
app.get('/sabores/2', function (req, res) {
    res.json([{ "sabor": "Calabresa", "preco": 18 }, { "sabor": "Quatro Queijos", "preco": 21 }, { "sabor": "Bacon", "preco": 19 }, { "sabor": "Chocolate", "preco": 20 }, { "sabor": "Brocolis", "preco": 22 }]);
});
app.get('/sabores/3', function (req, res) {
    res.json([{ "sabor": "Calabresa", "preco": 25 }, { "sabor": "Quatro Queijos", "preco": 28 }, { "sabor": "Bacon", "preco": 26 }, { "sabor": "Chocolate", "preco": 27 }, { "sabor": "Brocolis", "preco": 29 }]);
});
app.post('/logon', function (req, res) {
    if (req.body.userName && req.body.password) {
        var userName = req.body.userName;
        var password = req.body.password;
        if (userName == "admin@senai" && password == "1234") {
            res.json({ "status": 200, "userName": "admin@senai", "password": "1234" });
        }
        else {
            res.json({ "status": 401 });
        }
    }
});
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});

import express = require("express");
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

var cors = require('cors');
var bodyParser = require('body-parser');

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port: number = 8080;
const tamanho = express.Router();
const saboresPequena = express.Router();
const saboresMedia = express.Router();
const saboresGrande = express.Router();
const logon = express.Router();

app.get('/', (req, res) => {
    res.send('Bem-vindo à home page!')
});

app.get('/tamanhos', (req, res) => {
    res.json([{"id":1,"name":"Pequeno","quantidade_sabores":1},{"id":2,"name":"Médio","quantidade_sabores":2},{"id":3,"name":"Grande","quantidade_sabores":3}])
});
app.get('/sabores/1', (req, res) => {
    res.json([{"sabor":"Calabresa","preco":12},{"sabor":"Quatro Queijos","preco":15},{"sabor":"Bacon","preco":13},{"sabor":"Chocolate","preco":14},{"sabor":"Brocolis","preco":16}])
});
app.get('/sabores/2', (req, res) => {
    res.json([{"sabor":"Calabresa","preco":18},{"sabor":"Quatro Queijos","preco":21},{"sabor":"Bacon","preco":19},{"sabor":"Chocolate","preco":20},{"sabor":"Brocolis","preco":22}])
});
app.get('/sabores/3', (req, res) => {
    res.json([{"sabor":"Calabresa","preco":25},{"sabor":"Quatro Queijos","preco":28},{"sabor":"Bacon","preco":26},{"sabor":"Chocolate","preco":27},{"sabor":"Brocolis","preco":29}])
});
app.post('/logon', function(req,res){
    if (req.body.userName && req.body.password){
        var userName = req.body.userName;
        var password = req.body.password;
        if(userName == "admin@senai" && password == "1234"){
            res.json({"status":200,"userName":"admin@senai","password":"1234"});
        }
        else{
            res.json({"status":401});
        }
    }
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
});
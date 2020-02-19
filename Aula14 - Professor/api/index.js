
console.log("Servidor startado");

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.send("Ola");
});

app.get("/contato", function(req, res){
    
    res.render('contato');

});

app.post("/contato", function(req, res){
    res.send("vc enviou um form");
})

app.listen(3000);

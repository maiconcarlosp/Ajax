var sqlite = require('sqlite3');
var db = new sqlite.Database("banco.db");
var sql = "select * from contatos order by nome";
db.all(sql,function(erros, retorno){
console.log(erros, retorno);
});
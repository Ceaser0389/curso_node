var http = require("http")  // http nativo do node


http.createServer(function(req,res){
    res.end("<h1>Bem vindo ao meu site!!</h1>");
}).listen(8181);



console.log("Meu servidor está rodando!")
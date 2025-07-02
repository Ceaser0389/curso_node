 const express = require("express") // Importando o express
 const app = express();  // Iniciando o express



//a gente tem que devolver uma res em uma rota 
app.get("/",function(req,res){
     res.send("<h1>Bem vindo ao guia do Programador!</h1>")
});


app.get("/blog/:artigo?",function(req,res){
    
    var artigo = req.params.artigo;
    
    if(artigo){
       res.send("<h2> Artigo: " + artigo + " </h2")
    }else{

    }
    res.send("<h1>Bem vndo ao meu blog!</h1>")
})


app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"]

    if(canal){
        res.send(canal)
    }
    else{
        res.send("Nenhum canal fornecido!")
    }


    res.send(canal)
})

app.get("/ola/:nome/:empresa", function(req,res){
   
//  REQ => DADOS ENVIADOS PELO USUÁRIO
//  RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO

 var nome = req.params.nome

 var empresa =  req.params.empresa;

 res.send("<h1> oi " + nome +  + "do "   + empresa + "</h1> ");
});



//abrir um servidor
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }
    else{
        console.log("Servidor iniciado com sucesso!")
    }
})


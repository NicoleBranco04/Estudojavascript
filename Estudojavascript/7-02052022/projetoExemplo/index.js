/* importação do módulo do servidor express*/
const express = require("express");


/* Criação do aplicativo do servidor express*/
const app = express();

/* permitir que o servidor trabalhe com o formato JSON*/
app.use(express.json());

/* Vamos criar a primeira rota do servidor.*/
/*Esta será a rota raiz*/
app.get("/",(req,res)=>{
    res.send("Olá! Seja Bem Vindo. Você está na rota raiz");
});

// definir uma porta de comunicação com o servidor
app.listen(5000, ()=> console.log("on line em http://localhost:5000"));
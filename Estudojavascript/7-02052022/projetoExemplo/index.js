// importação do modulo do servidor express
const express = require("express");
// importação do modulo mongoose
const mongoose = require("mongoose");
// criação do aplicativo do servidor express
const app = express();
//  permitir que o servidor trabalhe no formato json
app.use(express.json());

/* URL de conexão com o banco de dados mongodb 
mongodb+srv://guxtavuh:<password>@projetobackapi.vp7zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
const urldb =
  "mongodb+srv://nicole:branconicole920@projetobackapi.vp7zl.mongodb.net/meuPrimeiroBanco?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

// criar estrutura da tabela para cadastro de clientes

const tabela = mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});
//criar o modelo de dados da tabela (criar tabela com extrutura)
const cliente = mongoose.model("tbcliente", tabela);

//  Vamos criar a primeira rota do servidor
// Rota raiz
app.get("/", (req, res) => {
  // Vamos trazer todos os clientes cadastrados para a tela.
  cliente.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar clientes -> ${erro}` });
    res.status(200).send({ output: dados });
  });
});
//  vamos criar a rota com o vero post, é usado quando se deseja
//  cadastrar algum dado ou para fazer sistema de login
app.post("/cadastro", (req, res) => {
  // criação novo cliente apartir de dados enviados
  const cli = new cliente(req.body);
  // comando para gravar os dados no banco de dados
  cli
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cliente cadastrado`, info: dados });
    })
    .catch((erro) =>
      res.status(500).send({ output: `Erro ao cadastrar ->${erro}` })
    );
});
// rota para atualizar os dados dos clientes, vamos usar o verbo put
// para atualizar precisaremos de duas informações, a primeira é o id do dado
// que voce deseja atualizar e a segunda são os dados que desejam atualizar

app.put("/atualizar/:id", (req, res) => {
  cliente.findByIdAndUpdate(
    req.params.id,
    res.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `Erro ao atualizar -> ${erro}` });
      res.status(200).send({ output: `Atualizado`, info: dados });
    }
  );
});

// Para deletar o dado iremos usar o verbo delit, passando o id

app.delete("/Apagar/:id", (req, res) => {
   cliente.findByIdAndDelete(req.params.id,(erro,dados)=>{
      if (erro)
       return res.status(500).send({output: `Erro ao apagar -> ${erro}`});
       res.status(204).send({ output: "Apagou"});
   })
})

// definir uma porta de comunicação com um servidor de aplicação
app.listen(5000, () => console.log("on line em http://localhost:5000"));

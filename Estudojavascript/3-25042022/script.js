function while1() {
  var i = 0;
  while (i < 10) {
    console.log(`Contei ${i}`);
    i++;
  }
}

function while2() {
  var operacao = prompt(
    "Digite:\n1-Soma\n2-subtrair\n3-multiplicar\n4-dividir\nS-Sair"
  );
  while (operacao != "S") {
    var n1 = prompt("Digite um númeo");
    var n2 = prompt("Digite outro número");

    if (operacao == "1") {
      alert(parseInt(n1) + parseInt(n2));
    } else if (operacao == "2") {
      alert(parseInt(n1) - parseInt(n2));
    } else if (operacao == "3") {
      alert(parseInt(n1) * parseInt(n2));
    } else if (operacao == "4") {
      alert(parseInt(n1) / parseInt(n2));
    } else {
      alert(" O valor digitado não é uma operação");
    }

    var operacao = prompt(
      "Digite:\n1-Soma\n2-subtrair\n3-multiplicar\n4-dividir\nS-Sair"
    );
  }
}

function paleta() {
  /* RGB(Vermelo, Verde, Azul);
  RGB(0 - 255, 0 - 255, 0 - 255);
  Vamos usar o comando random(randomico-aleatório) da classe Math(matemátia) para gerar números
  aleatórios entre 0 - 255. Assim iremos formar as cores emrgb*/

  var tabela = "<table>";
  for (var linha = 1; linha <= 10; linha++) {
    tabela += "<tr>";

    for (var coluna = 1; coluna <= 20; coluna++) {
      var r = Math.round(Math.random() * 254);
      var g = Math.round(Math.random() * 254);
      var b = Math.round(Math.random() * 254);

      tabela += `<td onclick=fundo(this.style.backgroundColor) style=background-color:rgb(${r},${g},${b})></td>`;
    }
    tabela += "</tr>";
  }
  tabela += "</table>";

  document.getElementById("caixa").innerHTML = tabela;
  document.getElementById("caixa").style.display = "block";
}

function fundo(elemento) {
  document.body.style.backgroundColor = elemento;
}

function fecharpaleta() {
  document.getElementById("caixa").style.display = "none";
  document.body.style.backgroundColor = "white";
}

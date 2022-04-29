function array1() {
  var nomes = ["Paulo", "Helena", "Vanessa"];
  console.log(nomes[0]);
  /*length pega o tamanho do array1 */
  for (var i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
  /* vamos adicionar um nome */
  nomes.push("Guilherme");
  console.log(nomes);
  /* remover o ultimo elemento do array*/
  nomes.pop();
  console.log(nomes);
  //*remover o primeiro elemento do array*/
  nomes.shift();
  console.log(nomes);
  //*adicionar o primeiro elemento do array*/
  nomes.unshift("Wagner");
  nomes.push("Gabriela");
  console.log(nomes);
  //*Vamos criar uma matriz com nome e idade
  var dados = [
    ["Nome", "Idade"],
    ["Pedro", "15"],
    ["Marcos", "21"],
    ["Deborah", "22"],
  ];
  console.log(dados);
}

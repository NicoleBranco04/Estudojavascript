// janela de alerta criada em javascript//
alert("Olá. Seja bem vindo");
// vamos solicitar ao usuário que entre com o seu nome
// utilizaremos o prompt associado a uma variável
/*var nome = "";
 nome = prompt("Digite o seu nome");
alert(nome.toUpperCase()); 
*/

// Calcular as 5 operações aritmeticas
var numero1 = prompt("Digite um número");
var numero2 = prompt("Digite outro número");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "os resultados são: \n\n"+
    "soma: "+soma+
    "\nsubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndivisão: "+dividir+
    "n\resto: "+resto
)


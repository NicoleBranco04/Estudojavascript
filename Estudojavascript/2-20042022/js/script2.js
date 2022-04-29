function repeticao1() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function galeria() {
  const miniatura = document.getElementById("miniatura");
  const painel = document.getElementById("painel");

  for (var i = 1; i <= 5; i++) {
    miniatura.innerHTML +=
      "<img src=img/photo-0" + i + ".jpg id=photo-0" + i + ">";
  }
  abrirNoPainel();
}

function abrirNoPainel() {
  document.getElementById("photo-01").onclick = function () {
    painel.innerHTML = "<img src=img/photo-01.jpg>";
  };
  document.getElementById("photo-02").onclick = function () {
    painel.innerHTML = "<img src=img/photo-02.jpg>";
  };
  document.getElementById("photo-03").onclick = function () {
    painel.innerHTML = "<img src=img/photo-03.jpg>";
  };
  document.getElementById("photo-04").onclick = function () {
    painel.innerHTML = "<img src=img/photo-04.jpg>";
  };
  document.getElementById("photo-05").onclick = function () {
    painel.innerHTML = "<img src=img/photo-05.jpg>";
  };
}

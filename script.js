function encriptar() {
  let textoInicial1 = document.getElementsByClassName("text-input")[0].value;
  let textoCifrado = textoInicial1.replace(/e/gim, "enter");
  textoCifrado = textoCifrado.replace(/o/gim, "ober");
  textoCifrado = textoCifrado.replace(/i/gim, "imes");
  textoCifrado = textoCifrado.replace(/a/gim, "ai");
  textoCifrado = textoCifrado.replace(/u/gim, "ufat");
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto2").innerHTML = textoCifrado;
  document.getElementById("texto1").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("desbloqueo").style.display = "none";
  document.getElementById("bloqueo").style.display = "show";
  document.getElementById("bloqueo").style.display = "inherit";
}
function desencriptar() {
  let textoInicial1 = document.getElementsByClassName("text-input")[0].value;
  let textoCifrado = textoInicial1.replace(/enter/gim, "e");
  textoCifrado = textoCifrado.replace(/ober/gim, "o");
  textoCifrado = textoCifrado.replace(/imes/gim, "i");
  textoCifrado = textoCifrado.replace(/ai/gim, "a");
  textoCifrado = textoCifrado.replace(/ufat/gim, "u");
  document.getElementById("imgDer").style.display = "none";

  document.getElementById("texto2").innerHTML = textoCifrado;
  document.getElementById("texto1").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("bloqueo").style.display = "none";

  document.getElementById("desbloqueo").style.display = "show";
  document.getElementById("desbloqueo").style.display = "inherit";
}
function copy() {
  let contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
}

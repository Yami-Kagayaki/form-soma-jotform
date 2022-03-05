var clickbut = document.querySelector("#app form button");
var in1 = document.querySelector("form #v1");
var in2 = document.querySelector("form #v2");
clickbut.addEventListener("click", run);
function run(event) {
  event.preventDefault();
  console.log(soma());
  document.querySelector("#result").innerHTML = numTrue();
}

function soma() {
  var v1 = parseInt(in1.value);
  var v2 = parseInt(in2.value);
  return v1 + v2;
}

function numTrue(a, b) {
  if (!isNaN(in1.value) || !isNaN(in2.value)) {
    return negativo();
  } else {
    alert("Voçe digitou valores ivalidos");
    return "Inválido";
  }
}

function negativo() {
  if (parseInt(in1.value) >= 0 || parseInt(in2.value) >= 0) {
    return soma();
  } else {
    alert("Voçe digitou valores ivalidos");
    return "Inválido";
  }
}

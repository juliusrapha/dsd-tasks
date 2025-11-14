function submeter() {
  const media = 7;
  var res = document.querySelector("div#res");
  var nome = document.querySelector("input#txtnome");
  var nota1 = Number(document.querySelector("input#txtnota1").value);
  var nota2 = Number(document.querySelector("input#txtnota2").value);
  var mediaCalc = (nota1 + nota2) / 2;
  if (
    txtnota1.value.length == 0 ||
    txtnota2.value.length == 0 ||
    txtnome.value.length == 0 ||
    isNaN(txtnota1.value) ||
    isNaN(txtnota2.value) ||
    isNaN(txtnota3.value)
  ) {
    alert("[ERRO] verifique os dados e tente novamente");
  } else if (mediaCalc < media) {
    res1.innerHTML = `A tua nota final[media] é de ${mediaCalc}`;
    res.innerHTML = `[MAU APROVEITAMENTO] A tua nota final está abaixo da média`;
  } else {
    res1.innerHTML = `A tua nota final[media] é ${mediaCalc}`;
    res.innerHTML =
      "[BOM APROVEITAMENTO] A tua nota final está acima/igual da média";
  }
}

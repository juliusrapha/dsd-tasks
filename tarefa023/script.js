function confirmar() {
  var nome1 = document.querySelector("input#nome");
  var sexo = document.getElementsByName("marc");
  var valor1 = Number(document.querySelector("input#valor").value);
  var rese = Number(document.querySelector("input#resu"));
  if (valor.value.length == 0 || nome.value.length ==0 || isNaN(valor.value)) {
    alert('[ERRO] Verifique os dados e tente novamente')
  } else if (sexo[0].checked) {
    var descM = Math.round(valor1 * (1 - 0.13));
    document.getElementById("resu").value = descM;
  } else {
    var descH = Math.round(valor1 * (1 - 0.05));
    document.getElementById("resu").value = descH;
  }
}

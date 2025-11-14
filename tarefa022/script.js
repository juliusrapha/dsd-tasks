function submeter() {
  var data = new Date();
  var date = data.getFullYear();
  var ano1 = Number(document.querySelector("input#ano").value);
  var resul = date - ano1;
  var res = document.querySelector("div#res");
  if (ano.value.length == 0 || isNaN(ano.value)) {
    alert("[ERRO] Verifique os dados e volte a tentar");
  } else if (resul < 18) {
    res.innerHTML = `Faltam ${resul} anos para o Alistamento`;
  } else if (resul >= 18 && resul <= 35) {
    var resul1 = resul - 18;
    res.innerHTML = `Já se passaram ${resul1} anos do Alistamento`;
  } else {
    res.innerHTML = `Já não pode alistar-se`;
  }
}

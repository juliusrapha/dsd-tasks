function verificar() {
  var ano = Number(document.querySelector("input#ano1").value);
  var res = document.querySelector("div#res");
  if (ano1.value.length==0 || isNaN(ano1.value)) {
    alert("[]ERRO] verifique os dados e volte a tentar mais tarde");
  } else if (ano % 4 === 0 && ano % 400 === 0 && ano % 100 === 0) {
    res.innerHTML = `O ano digitado  é Bissexto`;
  } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 != 0) {
    res.innerHTML = `O ano digitado não é Bissexto`;
  } else {
    res.innerHTML = `O ano digitado  é Bissexto`;
  }
}

function okay() {
  var numer = Number(document.querySelector("input#txtnum").value);
  var res = document.querySelector("div#res");
  if (txtnum.value.length ==0 || isNaN(txtnum.value)) {
    alert("[]ERRO] verifique os dados e volte a tentar mais tarde");
  }else
  if (numer % 2 === 0) {
    res.innerHTML = `O numero que você insiriu é par`;
  } else {
    res.innerHTML = `O numero que você insiriu é impar`;
  }
}

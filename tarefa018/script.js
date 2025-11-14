function confirmar() {
  const idads=18
  var data = new Date();
  var date = data.getFullYear();
  var nasc1 = Number(document.querySelector("input#nasc").value);
  var res1 = document.querySelector("div#res1");
  var res2 = document.querySelector("div#res2");
  var res3 = document.querySelector("div#res3");
  var idade = date - nasc1;
  

  if (nasc.value.length == 0 || Number(nasc.value) > date) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else if (idade < idads) { 
     res1.innerHTML = `Você tem ${idade} anos`;
     res2.innerHTML = `A tua idade de ${idade} anos é menor que ${idads} anos`;
     res3.innerHTML = `Portanto você não pode votar`;
  } else {
    res1.innerHTML = `Você tem ${idade} anos`
    res2.innerHTML = `A tua idade de ${idade} anos é >/= ${idads} anos`
    res3.innerHTML = `Portanto você pode votar`
  }
}

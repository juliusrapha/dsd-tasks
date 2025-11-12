function submeter() {
  const veloPerm = 80;
    var veloActual = Number(document.querySelector("input#txtvel").value);
    var diferen = veloActual - veloPerm;
    var multip = diferen*5
    if (txtvel.value.length == 0) {
        alert("Preencha os dados");
    } else if (veloActual <= veloPerm) {
      alert("Sem Multa, Põe o cinto de segurança!");
    } else {
      alert(`Está Multado, o valor da multa é ${multip}`);
    }
}

function confirma() {
    var segm1 = Number(document.querySelector("input#seg1").value);
    var segm2 = Number(document.querySelector("input#seg2").value);
    var segm3 = Number(document.querySelector("input#seg3").value);
    var resul = document.querySelector("div#res");
    if (
        seg1.value.length == 0 ||
        seg2.value.length == 0 ||
        seg3.value.length == 0 ||
        isNaN(seg1.value) ||
        isNaN(seg2.value) ||
        isNaN(seg3.value)
    ) {
        alert("[ERRO] Verifique os dados e volte a tentar novamente");
    } else if ((segm1 + segm2) > segm3 && (segm3 + segm2) > segm1 && (segm3 + segm1) > segm2) {
      resul.innerHTML= `É possivel construir um triângulo com esses segmentos`  
    } else {
      resul.innerHTML = `Não é possivel construir um triângulo com esses segmentos`;  
        
    }
  
}
 
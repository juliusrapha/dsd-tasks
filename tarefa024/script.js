function montante() {
    var distan = Number(document.querySelector('input#dista').value)
    var res = document.querySelector('input#resu')
    if (dista.value.length == 0 || isNaN(dista.value)) {
        alert('[ERRO] verifique os dados e volte a tentar novamente!')
    }
    if (distan <= 200) {
        var valor1 = distan * 0.50
        document.querySelector('input#resu').value = valor1
        
    } else {
        var valor2 = distan * 0.4
        document.querySelector('input#resu').value = valor2
    }
}
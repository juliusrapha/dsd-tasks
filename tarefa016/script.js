function confirmar() {
    var quantCig = parseInt(document.querySelector('input#cigar').value)
    var quantAnos = parseInt(document.querySelector('input#anos').value)
    var tempPerdC = quantCig * 10
    var tempEmH = (tempPerdC/ 60)
    var tempEmDias = (tempEmH / 24)
    var totalEmDias = quantAnos*365*tempEmDias
var partInteira = Math.floor(totalEmDias)

    var res = document.querySelector('div#res')
    res.innerHTML = ` ${partInteira}`
    
}
var valores = []
var res = document.getElementById('res')

function clicar() {
var numero = parseInt(document.getElementById('inumero').value)
var tabela = document.getElementById('itabela')
    if (numero < 0 || numero > 100) {
        window.alert(`Digite um número dentro da regra`)
    } else {
        var numbers = document.createElement('option')
        valores.push(numero)
        numbers.text = `Valor ${numero} Adicionado`
        numbers.value = (numero)
        tabela.appendChild(numbers)
        inumero.value = ' '
        inumero.focus()
        res.innerHTML = ''
    }

}

function verificar() {
    if (valores == 0) {
        window.alert('Adicione algum valor')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        
        media = soma/tot

    res.innerHTML = `<p>A tabela tem ${tot} números cadastrados</p>`
    res.innerHTML += `<p>O menor valor é ${menor}</p>`
    res.innerHTML += `<p>O maior valor é ${maior}<p>`
    res.innerHTML += `<p>Somando todos, temos ${soma}</p>`
    res.innerHTML += `<p>A média de todos os números são ${media}<p>`
}
}

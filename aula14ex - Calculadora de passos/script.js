function clicar() {

    var inicio = parseInt(document.getElementById('iinicio').value);
    var fim = parseInt(document.getElementById('ifim').value);
    var passo = parseInt(document.getElementById('ipasso').value);
    var res = document.getElementById('resposta');

    if (fim == 0 && inicio == 0 || passo == 0) {
        res.innerHTML = `Impossível calcular `
    } else {
        res.innerHTML = ``
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo)
                res.innerHTML += `\u{1F449} ${c} `
        } else {
            for (var c = inicio; c >= fim; c -= passo)
                res.innerHTML += `\u{1F449} ${c} `
        }
    }
    res.innerHTML += `&#x1F3C1;`
}

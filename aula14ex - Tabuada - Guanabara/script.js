function clicar() {

    var num = parseFloat(document.getElementById('inumero').value)
    var res = document.getElementById('seltab')
    
    while (res.firstChild) {
        res.removeChild(res.firstChild);
    }

    if (num == 0) {
        window.alert(`digite um número válido`)
    } else {
        var c = 1
        while (c <= 20) {
            var item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }

    }

}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value < 1850 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotos/bebeh.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovemh.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulto.jpg')
            } else {
                img.setAttribute('src', 'fotos/velho.jpg')
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotos/bebem.jpg')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'fotos/jovemm.jpg')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'fotos/adulta.jpg')
                //adulta
            } else {
                img.setAttribute('src', 'fotos/velha.jpg')
                genero = 'Idosa'
                //idosa
            }
        }


        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
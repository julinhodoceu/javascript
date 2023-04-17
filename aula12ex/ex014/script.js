function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//data.getHours ()



if (hora >= 18 || hora <= 5) {

    img.src = 'boanoite.jpg'
    msg.innerText = `Agora são ${hora} horas da noite, boa noite!`
    document.body.style.background = 'rgb(50,0,97)';

} else if (hora >= 6 && hora <= 11) {
    img.src = 'bomdia.jpg'
    msg.innerHTML = `Agora são ${hora} horas do dia, bom dia!`
    document.body.style.background = 'rgb(255, 219, 60)';

} else {
    img.src = 'boatarde.jpg'
    msg.innerHTML = `Agora são ${hora} horas da tarde, boa tarde!`
    document.body.style.backgroundColor = 'rgb(255,253,123)';
}
}

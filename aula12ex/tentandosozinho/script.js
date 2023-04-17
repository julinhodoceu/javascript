    function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 

    if (hora >= 6 && hora < 12) {
        //bom dia
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
        img.src = 'bomdia.jpg'
        document.body.style.background = 'rgb(253, 250, 79)';
    } else if (hora >= 12 && hora <= 17) {
        //boa tardex
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
        img.src = 'boatarde.jpg'
        document.body.style.background = 'rgb(255, 168, 117)';
    } else {
        //boa noite
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
        img.src = 'boanoite.jpg'
        document.body.style.backgroundImage = 'url("estrela.gif")';
        document.body.style.background.filter = 'blur(100px)';
    }
    }
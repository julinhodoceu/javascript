var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`)
if (hora >= 6 && hora <= 11) {
    console.log(`Bom dia queride`)
} else if (hora >= 12 && hora <= 17){
    console.log(`Boa tarde Suelen`)
} else {
    console.log (`Boa noite Suh`)
}
var valores = [8,1,7,4,2,9]
console.log(valores)

/*
for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (var pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`O valor 7 está na posição ${valores.indexOf(7)}`) // Ele vai buscar o valor que vai estar no elemento 7 (posição), que nesse caso é 2
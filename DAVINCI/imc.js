let a = parseFloat(prompt('informe sua altura em metros: '))

let p = parseFloat(prompt('informe seu peso em kg: '))

let imc = p / (a * a)
alert('Seu IMC e' + imc)

if (imc < 18,5){
    document.write('Seu IMC e ' + imc + '<br>'+ 'procure  um medico' + '<br>' + '<img src= "images/imc.png"> ')
}

else if(imc >= 30){
    document.write('Seu imc e ' + imc + '<br>' + 'URGENTE!, procure um medico')
}

else {
    document.write('parabens!, vida que segue ')
}
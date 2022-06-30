function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    /*
    var hora = data.getHours()
    var minuto = data.getMinutes()
    */
   var hora = 20
   var minuto = 30

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = './imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './imagens/noite.png'
        document.body.style.background = '#515154'
    }
}   
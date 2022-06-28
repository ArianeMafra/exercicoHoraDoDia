function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date () 
    var hora = data.getHours()
    
   

    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12 ){
        //Bom dia!
        img.src = 'images/manha250.png'
        document.body.style.background = "#fea101"
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'images/tarde250.png'
        document.body.style.background = '#f7b39a'
    } else {
        //Boa noite!
        img.src = 'images/noite250.png'
        document.body.style.background = "#1b262b"
    }
}

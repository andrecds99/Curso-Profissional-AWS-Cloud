function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO]  Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','Criança M.png')
            }else if (idade <21) {
                //Jovem
                img.setAttribute('src','Jovem M.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Adulto M.png')
            }else {
                //Idoso
                img.setAttribute('src','Idoso M.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','Criança F.png')
            }else if (idade <21) {
                //Jovem
                img.setAttribute('src','Jovem F.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Adulto F.png')
            }else {
                //Idoso
                img.setAttribute('src','Idosa F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
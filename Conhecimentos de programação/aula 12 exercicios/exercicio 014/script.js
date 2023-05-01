// Esta função é chamada quando a página é carregada
function carregar() {
  // Obtém o elemento que exibirá a mensagem de saudação
  var msg = window.document.getElementById('msg')

  // Obtém o elemento de imagem
  var img = window.document.getElementById('imagem')

  // Obtém a data e hora atuais
  var data = new Date()

  // Obtém a hora atual
  var hora = data.getHours()

  // Obtém o minuto atual
  var minuto = data.getMinutes()

  // Exibe a hora atual no elemento "msg"
  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

  // Verifica se a hora atual está entre 0 e 12
  if (hora >= 0 && hora < 12) {
    // Se estiver, exibe a mensagem "Bom dia!" e a imagem de manhã
    msg.innerHTML += "<br>Bom dia!"
    img.src = 'manha.png'
    document.body.style.background = '#fec871'
  }
  // Verifica se a hora atual está entre 12 e 18
  else if (hora >= 12 && hora < 18) {
    // Se estiver, exibe a mensagem "Boa tarde!" e a imagem de tarde
    msg.innerHTML += "<br>Boa tarde!"
    img.src = 'tarde.png'
    document.body.style.background = '#ca4801'
  }
  // Caso contrário
  else {
    // Exibe a mensagem "Boa noite!" e a imagem de noite
    msg.innerHTML += "<br>Boa noite!"
    img.src = 'noite.png'
    document.body.style.background = '#132239'
  }
}

let numero = document.querySelector('input#txtnum')
let tabela = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function analisar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tabela.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.lenght == 0) {
        window.alert ('Adicione valores antes de finalizar !')
    } else {
        let tot = valores.lenght
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${auxMedia}.</p> `
 
    }
}
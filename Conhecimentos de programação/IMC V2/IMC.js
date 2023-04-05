function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc')
    buttonCalculateImc.addEventListener('click', handleButtonClick)

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input',handleButtonClick)
    inputHeight.addEventListener('input',handleButtonClick)

    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height * height)
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);
    
    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.',',');
    
    imcResult.textContent = formattedImc;

    var aux = imc
    
    var classOfWeight = document.querySelector("#classificationWeight");
    if (aux >= 16 && aux <= 16.99) {
    classOfWeight.textContent = "Muito abaixo do peso";
    } else if (aux >= 17 && aux <= 18.49) {
    classOfWeight.textContent = "Abaixo do peso"; 
    } else if (aux >= 18.5 && aux <= 24.9) {
    classOfWeight.textContent = "Peso Normal ";
    }  else if (aux >= 25 && aux <= 29.99) {
    classOfWeight.textContent = "Acima do peso";
    } else if (aux >= 30 && aux <= 34.99) {
    classOfWeight.textContent = "Obesidade grau I";
    } else if (aux >= 35 && aux <= 40) {
    classOfWeight.textContent = "Obesidade grau II";
    }else if (aux > 40) {
    classOfWeight.textContent = "Obesidade grau III";
    } ;
}

start();
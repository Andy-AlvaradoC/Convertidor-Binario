
let select = document.querySelector("#conversionTipo");
function calcularValor() {
  if (select.value === "decToBin") {
    decimalToBinario();
  } else {
    binarioToDecimal();
  }
}
function permitirSoloCerosUnos(event){
    let value = event.target.value;
    event.target.value = value.replace(/[^01]/g, ''); 
  
}
select.addEventListener("change", function (event) {
  let input = document.querySelector("#inputNumber")
  let output = document.querySelector("#output")
  if (event.target.value === "binToDec") {
    document.querySelector("#titulo").textContent =
      "Convertir binario a decimal:";
    document.querySelector("#lblInput").textContent =
      "Ingrese el número binario:";
      input.value = ''
      output.value = ''
    input.placeholder = "Ej:10110";
    input.addEventListener('input',permitirSoloCerosUnos)
     

    document.querySelector("#lblOutput").textContent = "Valor Decimal:";
  } else {
    // binario a decimal
    input.value = ''
      output.value = ''
    document.querySelector("#titulo").textContent =
      "Convertir decimal a binario:";
    document.querySelector("#lblInput").textContent =
      "Ingrese el número decimal:";
document.querySelector("#inputNumber").placeholder = "Ej:12";
    document.querySelector("#lblOutput").textContent = "Valor Binario:";
    input.removeEventListener('input',permitirSoloCerosUnos)

    
   
  }
});

let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", function () {
  select.selectedIndex = 0;
  if (select.value === "decToBin") {
    document.querySelector("#titulo").textContent =
    "Convertir decimal a binario:";
    document.querySelector("#lblInput").textContent =
    "Ingrese el número decimal:";
    document.querySelector("#lblOutput").textContent = "Valor Binario:";
    document.querySelector("#inputNumber").placeholder = "Ej:12";
  }
    document.querySelector('#inputNumber').value = ''
    document.querySelector('#output').value = ''
 
});

function decimalToBinario() {
  let decimal = Number(document.querySelector("#inputNumber").value);
  let residuos = [];
  while (decimal != 0) {
    let residuo = decimal % 2;
    residuos.push(residuo);
    let newDecimal = Math.floor(decimal / 2);
    decimal = newDecimal;
  }
  document.querySelector("#output").value = residuos.reverse().join("");
}

function binarioToDecimal() {
  let numeroBinario = document.querySelector("#inputNumber").value;
  let arrayBinario = numeroBinario.split("").reverse();

  let decimal = 0;
  for (let i = 0; i < arrayBinario.length; i++) {
    let bit = Number(arrayBinario[i]);
    let valor = bit * Math.pow(2, i);
    decimal += valor;
  }

  document.querySelector("#output").value = decimal;
}


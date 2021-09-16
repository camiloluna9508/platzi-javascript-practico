function salarioReal (){
    const salario = parseInt(document.getElementById("sueldo").value);
    let pension = document.getElementById("descuento").checked;
    let transporte = document.getElementById("transporte").checked;
    const transporteValue = evaluarporcentaje(transporte,salario,7)
    if (pension){
        const newSalario = salario*0.92;
        return newSalario+transporteValue;
    }
    else{
        return(salario+transporteValue);
    }
}
function calculoGastos (a){
    const alquiler = parseInt(document.getElementById("alquiler").value);
    const alimentacion= parseInt(document.getElementById("alimentacion").value);
    const facturas = parseInt(document.getElementById("Facturas").value);
    const prestamo = parseInt(document.getElementById("prestamo").value);
    let ahorro = document.getElementById("ahorro").checked;
    const ahorroValue = evaluarporcentaje(ahorro,a,10);
    let salarioGastos = a-(alquiler+alimentacion+facturas+prestamo+ahorroValue);
    return (salarioGastos);
}

function evaluarporcentaje(b,c,d){
    if (b){
        return (c*(d/100));
    }
    else {
        return 0;
    }
}

function procesar(){
    salario = salarioReal();
    salarioNeto = calculoGastos(salario);
    ahorrofinal = evaluarporcentaje(document.getElementById("ahorro").checked,salario,10);
    antesde.innerText = "Salario: $" + salario;
    despuesde.innerText = "Despues de pagar todo te queda: " + salarioNeto;
    ahorrofinal2.innerText = "Tu ahorro es de: $"+ ahorrofinal ;
}
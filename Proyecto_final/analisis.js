//helpers
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
const salariosColordenados = salariosCol.sort(
    function (a,b){
        return (a-b);
    }
);
function paroimpar (numero){
    return (numero % 2 === 0);
}

//end_Helpers

//mediana
function mediana (lista){
    let mitad = parseInt(lista.length/2);
    if (paroimpar(lista.length)){
        const mediana = (lista[mitad]+lista[mitad-1])/2;
        return mediana
    }
    else {
        const mediana = lista[mitad];
        return mediana;
    }
}
const medianageneral = (mediana (salariosColordenados));

//mediana top 10%
const noventadelarreglo = (salariosColordenados.length*(0.9));
const hastadonde = (salariosColordenados.length-noventadelarreglo);
const top10 = salariosColordenados.splice(noventadelarreglo,hastadonde);
const mediatop10p = mediana(top10);
console.log({
    medianageneral,
    mediatop10p,
});


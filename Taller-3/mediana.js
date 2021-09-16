
function calcularMediaAritmetica (lista){
    // let sumaLista = 0;
    // for ( i = 0;i < lista.length; i++)
    // {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento){
            return (valorAcumulado + nuevoElemento);
        }
    );
    const promedioLista = sumaLista/lista.length
    return (promedioLista);
}

function calcularMediana (lista){
    //primero se acomoda el arreglo de mayor a menor.
    lista = lista.sort(comparacion);
    const mitadLista = parseInt(lista.length/2);
    let mediana = 0;
    const posicionMediana = esPar(lista.length);
    if (posicionMediana == true ){
        mediana = (lista[mitadLista] + lista[mitadLista-1])/2;
    }
    else {
        mediana =lista[mitadLista] ;
    }
    return(mediana);
}

function esPar(a){
    if (a%2 == 0){
        return (true);
    }
    else{
        return (false);
    }
}
function comparacion (a,b){
    //funciona para acomodar de forma correcta una array de numeros de forma mayor  a menor
    return (a-b);
}
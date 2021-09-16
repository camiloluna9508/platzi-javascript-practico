function Calcularmoda(lista){
    const listacount = {};
    lista.map(
        function (elemnto){
            if (listacount[elemnto]){
                listacount[elemnto] +=1;
            }
            else{
                listacount[elemnto] = 1;
            }
        }
    );
    const listanew = Object.entries(listacount).sort(
        function (a,b){
            return (a[1]-b[1]);    }
    );
    
    const moda = listanew[listanew.length - 1];
    return (moda);
}
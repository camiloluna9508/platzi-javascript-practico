
function calculo_promedio_ponderado (ejemplo){
    const note_credit = ejemplo.map(
        function (a){
            return (a.note*a.credit);
        }
    );
    const suma = sumaarray(note_credit);
    
    const credit = ejemplo.map(
        function (a){
            return (a.credit);
        }
    );
    
    const suma_credit = sumaarray(credit);
    
    const promedio_ponderado = suma/suma_credit;
    return (promedio_ponderado);
}

function sumaarray (a){
    a.reduce(
        function (a=0,b){
            suma =  (a+b);
            return suma;
        }
    );
    return suma;
}

// codigo del  cuadrado

console.group("Cuadrados");

//perimetro
function perimetroCuadrado(lado)
{
    return lado * 4;
} 
//area
function areaCuadrado(lado)
{
    return lado ** 2;
} 
console.groupEnd();

// codigo del  cuadrado


// codigo del triangulo

console.group("Triangulos");

//perimetro
function perimetroTriangulo (lado1,lado2,base)
{
    return lado1+lado2+base;
}
//area
function areaTriangulo(base,altura)
{
    return ((base*altura)/2);
}
console.groupEnd();

// codigo del triangulo


// codigo del circulo

console.group("Circulo");
//Radio 
// Diametro
function diametroCirculo (radio){
    return radio*2;
}
//PI
const pi = Math.PI;
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*pi;
}
//Area
function areaCirculo(radio){
    return ((radio**2)*pi);
}
console.groupEnd();
// codigo circulo


//interactuando con html

//cuadrado
function calcularperimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
//cuadrado


//implementando el resto de medidas con html y javascript

//Triangulo
function calcularareaTriangulo()
{
    const base = document.getElementById("InputTriangulobase");
    const basevalue = parseInt (base.value);
    const altura = document.getElementById("InputTrianguloaltura");
    const alturavalue = parseInt (altura.value);
    const area = areaTriangulo(basevalue,alturavalue);
    alert(area);
}
function calcularperimetroTriangulo()
{
    const lado1 = document.getElementById("InputTriangulolado1");
    const lado1value = parseInt(lado1.value) ;
    const lado2 = document.getElementById("InputTriangulolado2");
    const lado2value = parseInt(lado2.value);
    const base = document.getElementById("InputTriangulobase");
    const basevalue = parseInt (base.value);
    const perimetro = perimetroTriangulo(lado1value,lado2value,basevalue);
    alert(perimetro);
}
//Triangulo

//Circulo
function calcularperimetroCirculo()
{
    const radio = document.getElementById("InputRadio").value;
    const radiovalue = parseInt (radio);
    const perimetro = perimetroCirculo(radiovalue);
    alert (perimetro);
}
function calcularareaCirculo()
{
    const radio = document.getElementById("InputRadio").value;
    const radiovalue = parseInt (radio);
    const area = areaCirculo(radiovalue);
    alert(area);
}
function calculardiametroCirculo()
{
    const radio = document.getElementById("InputRadio").value;
    const radiovalue = parseInt (radio);
    const diametro = diametroCirculo(radiovalue);
    alert (diametro);
}
//Circulo

//Altura isosceles
function calcularaltura()
{
    const lado_a = parseInt(document.getElementById("InputTrianguloladoa").value);
    const lado_c = parseInt(document.getElementById("InputTrianguloladoc").value);
    const base = parseInt(document.getElementById("Inputisoscelesbase").value);
    if ((lado_a==lado_c)||(lado_a==base)||(base==lado_c))
    {
        const ladosiguales= fladosiguales(lado_a,lado_c,base);
        const baser=diferente(lado_a,lado_c,base);
        const altura = Math.sqrt((ladosiguales**2)-((baser**2)/4));
        alert (parseFloat(altura));
    }
    else 
    {
        alert ("No es un triangulo isosceles, no tiene dos lados iguales.")
    }
}



function  fladosiguales(a,b,c)
{
    arreglo=[a,b,c];
    comparar = arreglo[0];
    for (i=1;i<=2;i++)
    {
        if (comparar == arreglo[i])
        {
            comparar = comparar;
        }
        else if (comparar == arreglo[i+1])
        {
            comparar = comparar;
        }
        else if (arreglo[i]==arreglo[i+1])
        {
            comparar=arreglo[i];
        }
    }
    return (comparar);
}

function diferente (a,b,c)
{
    arreglo=[a,b,c];
    comparar = arreglo[0];
    cont = 0;
    if (comparar == arreglo[1])
    {
        cont = arreglo[2];
    }
    else {
        if (arreglo[1]==arreglo[2])
        {
            cont = arreglo[0];
        }
        else{
            cont = arreglo[1];
        }
    }
    return (cont);
}
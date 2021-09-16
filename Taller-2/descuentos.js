function aplicando_descuento (precio,descuento)
{
    descuento = 100 - descuento;
    precio_final = (precio*descuento)/100;
    return (precio_final);
}

function Discount()
{
    const precio = parseInt(document.getElementById("inputprice").value);
    const cupon = (document.getElementById("inputdiscount").value);
    const descuento = Validar_cupon(cupon);
    if (descuento > 0)
    {
        const validacion = document.getElementById("cupon");
        validacion.innerText = "El CUPÓN TE DA UN : " + descuento + "% de descuento.";
        const original = document.getElementById("original");
        original.innerText = "El precio antes del descuento: $" + precio;
    }
    else
    {
        const validacion = document.getElementById("cupon");
        validacion.innerText = "NO SE APLICARA NINGUN DESCUENTO.";
        const original = document.getElementById("original");
        original.innerText =  "EL CUPÓN INGRESADO NO ES VALIDO.";
    }
    const precio_end = aplicando_descuento(precio,descuento);
    const Resultp = document.getElementById("Result_price");
    Resultp.innerText = "PRECIO FINAL: $" + precio_end;
}

function Validar_cupon(a)
{
    const cupones = ["Sabado_10","Friday_black","Fin_de_Año"];
    for (i = 0; i<= cupones.length;i++)
    {
        if (a===cupones[i])
        {
            return (10);
        }
        else if (a===cupones[i+1])
        {
            return(25);
        }
        else if (a===cupones[i+2])
        {
            return(50);
        }
        else{
            return (0);
        }
    }
}
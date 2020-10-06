function disminuirImagen(valor)
{
    if(valor == 1)
    {
        const id = document.getElementById('imagen').className = "original"
        const boton = document.getElementById('boton').setAttribute("value", 0)
        var variable = 10
        var otra_variable = 15
        console.log(variable + otra_variable)
    }
    else
    {
        const id = document.getElementById('imagen').className = "disminuir"
        const boton = document.getElementById('boton').setAttribute("value", 1)
    }
}
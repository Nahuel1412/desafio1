let inicio = prompt ('escriba "comenzar"')

while (inicio != "comenzar") {
    alert("Usted ingreso: "+inicio);
    inicio = prompt("ingrese la palabra requerida, por favor");
}

function calcular() {

    let alumno = prompt('Ingrese su nombre y apellido').toUpperCase();
    
    let nota1 = parseFloat (prompt('Ingrese su nota del 1er trimestre'));
    let nota2 = parseFloat (prompt('Ingrese su nota del 2do trimestre'));
    let nota3 = parseFloat (prompt('Ingrese su nota del 3er trimestre'));

    const promedio = (nota1 + nota2 + nota3)/3;

    if (nota1 > 10 || nota2 >10 || nota3 > 10) {
        alert(`ha ingresado una nota mayor a 10, presione la tecla "F5" e intente nuevante`);
    } else {
        if (promedio > 6) {
            alert ('Felicidades '+alumno+' usted esta aprobado/a, su promedio es: '+promedio);
        } else{
            alert ('Lo sentimos '+alumno+' usted esta desaprobado/a, su promedio es: '+promedio);
            }
        }
    }

calcular();
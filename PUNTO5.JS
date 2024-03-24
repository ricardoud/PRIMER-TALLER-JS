function estacion (mes){
    if(mes>=1 && mes<=12)
    switch(mes){
        case 1:
        case 2:
        case 12:
            return "INVERNO";
        case 3:
        case 4:
        case 5:
            return "Primavera"
        case 6:
        case 7:
        case 8:
            return "Verano"
        case 9:
        case 10:
        case 11:
            return "Otoño"
       
    }
    else{
        return "el numero de mes no existe"
    }
}
console.log(estacion(5))
const tipotriangulo = (lado1,lado2,lado3)=>{
    if (lado1=== lado2 && lado2=== lado3){
        return "El triangulo es Equilatero"
    }else if (lado1 === lado2 || lado1===lado3 || lado2===lado3){
        return "El triangulo es Isosceles"
    }else{
        return "El triangulo es Escaleno"
    }
}

console.log(tipotriangulo(3,1,5))
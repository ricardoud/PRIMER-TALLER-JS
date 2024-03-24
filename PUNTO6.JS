const MAYORYMENOR = (N1,N2,N3)=>{
    if (N1>N2 && N1>N3){
        return N1+ " numero es mayor"
    }else if (N2>N1 && N2>N3){
        return N2+ " numero es mayor"
    }else if (N3>N1 && N3>N2){
        return N3+ " numero es mayor"
    }else if(N1===N2 && N1>N3 ){
        return N1+" Y "+N2+" son mayores que "+N3
    }else if (N1===N2 && N2===N3 && N1===N3){
        return "los numeros son iguales"
    }
    return "todos los numeros son iguales"
}

console.log(MAYORYMENOR(12,2,14))
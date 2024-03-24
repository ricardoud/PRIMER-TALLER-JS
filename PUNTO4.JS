const esprimo =function primo(num){
    if(num<=1) { return false;
    }
    for (let i=2;i<=(num);i++){
        if (num % i===0){
            return "no es primo";
        }
    }
    return "es primo"
}

console.log(esprimo(1297))
const tienesolucion =(a,b,c)=>{
    const discriminante=b**2-4*a*c;
    return discriminante >0;
}

console.log(tienesolucion(-1,1,-8))
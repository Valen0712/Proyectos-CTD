function puedeSubir(altura,acompañado,penalizado){

    if (penalizado == true){
        return false; //si esta penalizado no entra
    }
    else if(altura >= 1.40 && altura < 2){
        return true;
    }
    else if(altura >= 1.20 && altura < 1.40 && acompañado == true){
        return true;
    }
    else if(altura < 1.20 || altura > 2){
        return false;
    }
    else {
        return false;
    }
    
}

console.log(puedeSubir(1.50, false,true));
console.log(puedeSubir(1.20,true,true));
console.log(puedeSubir(1.20,false, false));
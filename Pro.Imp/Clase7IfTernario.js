const a = [23, 45, 32];
 const b = [12, 67, 7];
 ganador = '';
 
 function encontrarGanador(a, b) {
    alicia = 0;
    bob = 0;
    

    for(let pos = 0; pos < a.length; pos ++) {
        a[pos] > b[pos] ? alicia++ : bob++;
    }
    alicia > bob ? ganador = 'Alicia es la Ganadora!!' : ganador = 'Bob es el Ganador!!';
    console.log(ganador);
 }
 encontrarGanador(a,b);
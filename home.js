
var numeroDeCarros = 20;

for (var contador = 0; contador <= numeroDeCarros; contador++) {
   // console.log(contador)
    
   if (contador == 0) {
       console.log("O número atual é ZERO");
   } else if (contador % 8 == 0) {
       console.log("O número " + contador + " é PAR")
   } else {
       console.log("O número ${contador} é ÍMPAR")
   }
}
// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'ivank',
  'lesta',
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];

let r = Math.trunc(Math.random() * dict.length)
let palabraCorrecta = dict[r];

let perdiste = "perdiste";
let ganaste = "ganaste";
let intentos = 0;
console.log(palabraCorrecta);
function handleSubmit(e){

e.preventDefault();
document.querySelector('input');

let adivinanza = e.target.word.value;
console.log(dict.includes(adivinanza));
if (adivinanza == palabraCorrecta) {
  console.log('si era esa')
}else {
  console.log('Nice try')
}


let i = 0;
for (let c of adivinanza) {
  console.log(c);
  if (c == palabraCorrecta[i]) console.log("+");
  else console.log("-");
  i++;
}



if (intentos < 6) {
  intentos++;
  console.log(intentos);
}else if (palabraCorrecta == adivinanza) {
  console.log("ganaste")
  // while (palabraCorrecta == adivinanza) {
  //   console.log(palabraCorrecta);
  //   handleSubmit;
  // }
} else {
  console.log("perdiste");
  // while (intentos >6 ) {
  //   console.log(palabraCorrecta);
  //   handleSubmit;
  // }
}

}

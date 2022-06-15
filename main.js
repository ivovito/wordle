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
let a = dict[0];
let b = dict[1];
let c = dict[2];
let d = dict[3];
let e = dict[4];
let f = dict[5];
let g = dict[6];
let h = dict[7];
let i = dict[8];
let j = dict[9];
let k = dict[10];
let l = dict[11];
let m = dict[12];
let n = dict[13];
let o = dict[14];
let p = dict[15];
let q = dict[16];
let r1 = dict[17];
let s = dict[18];
let t = dict[19];
let u = dict[20];
let v = dict[21];
let w = dict[22];
let r = Math.trunc(Math.random() * dict.length)
let palabraCorrecta = dict[r];
function handleSubmit(e){
console.log(document.querySelectorAll('form'));
let adivinanza = e.target.word.value;
console.log(dict.includes(adivinanza));
if (adivinanza == palabraCorrecta) {
  console.log('si era esa')
}else {
  console.log('te equivocaste rey')
}
}

let angkotRusakStr = prompt('Angkot Nomor berapa yang tidak bisa beroperasi?');
let angkotRusak = Number(angkotRusakStr);

let text1 = 'bisa';
let text2 = 'tidak bisa';
let noAngkot = 1;
if (angkotRusak > 0) {
  for (noAngkot = 1; noAngkot < angkotRusak; noAngkot++) {
    console.log('Angkot No.' + noAngkot + ' ' + text1 + ' beroperasi.');
  }
  console.log('Angkot No.' + angkotRusak + ' ' + text2 + ' beroperasi.');
  for (noAngkot = angkotRusak + 1; noAngkot <= 10; noAngkot++) {
    console.log('Angkot No.' + noAngkot + ' ' + text1 + ' beroperasi.');
  }
} else if (angkotRusak <= 0) {
  while (noAngkot <= 10) {
    console.log('Angkot No.' + noAngkot + ' ' + text1 + ' beroperasi.');
    noAngkot++;
  }
} else {
  console.log('Error');
}

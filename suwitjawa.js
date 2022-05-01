var hasil;

// pilihan user

while (true) {
  var user = prompt('Pilih salah satu: gajah, semut, orang');
  // pilihan komputer
  var comp = Math.floor(Math.random() * 3) + 1;
  switch (comp) {
    case 1:
      comp = 'gajah';
      break;
    case 2:
      comp = 'semut';
      break;
    case 3:
      comp = 'orang';
      break;
  }

  // Hasil

  //// Rules 1
  if (user == 'gajah' && comp == 'gajah') {
    hasil = 'SERI';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'gajah' && comp == 'semut') {
    hasil = 'KALAH';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'gajah' && comp == 'orang') {
    hasil = 'MENANG';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  }

  //// Rules 2
  else if (user == 'semut' && comp == 'semut') {
    hasil = 'SERI';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'semut' && comp == 'orang') {
    hasil = 'KALAH';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'semut' && comp == 'gajah') {
    hasil = 'MENANG';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  }

  //// Rules 3
  else if (user == 'orang' && comp == 'orang') {
    hasil = 'SERI';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'orang' && comp == 'gajah') {
    hasil = 'KALAH';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == 'orang' && comp == 'semut') {
    hasil = 'MENANG';
    alert('Kamu memilih ' + user + ' dan komputer memilih ' + comp + '\n\n' + 'Anda ' + hasil);
  } else if (user == null || '') {
    alert('Terima Kasih sudah berpartisipasi. Have a nice day :)');
    break;
  } else {
    var konfirmasi = confirm('Pilihan ERROR. Ulang lagi ya!');
  }
}

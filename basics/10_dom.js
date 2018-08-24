function toggleShow() {
  var elemento = document.getElementById('sneaky');
  var button = document.getElementById('switcher');

  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
    button.innerHTML = 'Esconder';
  } else {
    elemento.style.display = 'none';
    button.innerHTML = 'Mostrar';
  }
}

function colorize() {
  var elementos = document.getElementsByClassName('chameleon');
  for (elemento of elementos) {
    elemento.style.color = '#' + Math.random().toString(16).slice(2, 8);
  }
}

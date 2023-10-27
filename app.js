// Seleccionar elementos del DOM
const boton = document.getElementById('boton-color');
const texto = document.getElementById('color');

function generarColorRand() {
  let digitos = '0123456789abcdef';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceRand = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceRand];
  }
  return colorHex;
}

boton.addEventListener('click', function(){
  let colorRand = generarColorRand();
  console.log(colorRand);
  // Actualizar el texto
  color.textContent = colorRand;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorRand;
});
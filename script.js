window.addEventListener('load', () => {
  const hojaIzquierda = document.querySelector('.hoja-izquierda');
  const hojaDerecha = document.querySelector('.hoja-derecha');
  const campo = document.querySelector('.campo');
  const tarjeta = document.querySelector('.tarjeta');
  const abejas = document.querySelectorAll('.abeja');

  // Fase 1: Hojas se abren y aparece el campo
  setTimeout(() => {
    hojaIzquierda.style.transform = 'translateX(-100%)';
    hojaDerecha.style.transform = 'translateX(100%)';
    campo.style.opacity = '1';
  }, 1000);

  // Fase 2: Abejas aparecen
  setTimeout(() => {
    abejas.forEach(abeja => abeja.style.opacity = '1');
  }, 3000);

  // Fase 3: Tarjeta aparece
  setTimeout(() => {
    tarjeta.style.opacity = '1';
    tarjeta.style.bottom = '100px';
  }, 5000);
});

// script.js

// Obtener referencias a elementos del DOM
const timeElement = document.getElementById('time');
const periodElement = document.getElementById('period');
const toggleFormatButton = document.getElementById('toggleFormat');
const changeColorButton = document.getElementById('changeColor');

let is24HourFormat = true;

// Función para actualizar el reloj
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = '';

  // Formato 12 horas
  if (!is24HourFormat) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convertir 0 a 12 en formato 12 horas
    periodElement.textContent = period;
    periodElement.classList.remove('hidden');
  } else {
    periodElement.classList.add('hidden');
  }

  // Añadir ceros iniciales
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  // Actualizar la hora en el DOM
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Cambiar formato de hora
toggleFormatButton.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.textContent = is24HourFormat
    ? 'Cambiar a 12 horas'
    : 'Cambiar a 24 horas';
  updateClock();
});

// Cambiar color del reloj
changeColorButton.addEventListener('click', () => {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.container').style.backgroundColor = randomColor;
});

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializar el reloj
updateClock();

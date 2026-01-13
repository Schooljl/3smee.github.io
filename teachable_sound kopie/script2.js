// script.js
const svg = document.getElementById('klikbare-svg');
const geluid = document.getElementById('geluid');

svg.addEventListener('click', () => {
  geluid.currentTime = 0; // start geluid vanaf begin
  geluid.play();           // speel geluid af
});


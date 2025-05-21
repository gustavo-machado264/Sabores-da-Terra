const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-principal');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-fechado');
  menu.classList.toggle('menu-aberto');
});

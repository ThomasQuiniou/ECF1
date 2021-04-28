const toggleMenu = document.querySelector('.toggle-main-header-list');
const menu = document.querySelector('#main-header-list');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});
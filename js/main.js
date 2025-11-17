const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-content');

menuBtn.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
});

let menuButton = document.getElementById('hamburger');
let cross =  document.getElementById('cross');
let menu = document.getElementById('mobile-menu-id');

function hideMenu() {
    menu.classList.replace('show', 'hide');
    console.log("Fired");
}

function showMenu() {
    menu.classList.replace('hide', 'show')
}

menuButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);
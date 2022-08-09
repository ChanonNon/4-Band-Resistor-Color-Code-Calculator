function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

function color(color){
    document.getElementById("color").style.background = color;
    document.getElementById("line_1").style.background = color;
}
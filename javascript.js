var color_2 = document.getElementById("color_2");
var black = document.getElementById("black");

color_2.onclick = function(){
    menuToggle_1()
}

function menuToggle() {
    document.getElementById('h3').innerHTML = "กรุณาเลือกสีแถวที่ 1";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
    
}

function menuToggle_1() {
    document.getElementById('h3').innerHTML = "กรุณาเลือกสีแถวที่ 2";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}

function menuToggle_2() {
    document.getElementById('h3').innerHTML = "กรุณาเลือกสีแถวที่ 3";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

function color(color){
    document.getElementById("color_1").style.background = color;
    document.getElementById("line_1").style.background = color;
}



function color(color){
    document.getElementById("color_2").style.background = color;
    document.getElementById("line_2").style.background = color;
}

// function color_2(color){
//     document.getElementById("color_3").style.background = color;
//     document.getElementById("line_3").style.background = color;
// }


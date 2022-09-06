var color_1 = document.getElementById("color_1");
var color_2 = document.getElementById("color_2");
var color_3 = document.getElementById("color_3");
var color_4 = document.getElementById("color_4");

var gold   = document.getElementById("gold");
var silver = document.getElementById("silver");
var black  = document.getElementById("black");
var brown  = document.getElementById("brown");
var red    = document.getElementById("red");
var orange = document.getElementById("orange");
var yellow = document.getElementById("yellow");
var green  = document.getElementById("green");
var blue   = document.getElementById("blue");
var purple = document.getElementById("purple");
var gray   = document.getElementById("gray");
var white  = document.getElementById("white");

var band_1 = 0;
var band_2 = 0;
var multiplier = 0;
var tolerance = 0;

var result = document.getElementById("result_resistor");

color_1.onclick = function(){
    menuToggle_1();
}
color_2.onclick = function(){
    menuToggle_2();
}
color_3.onclick = function(){
    menuToggle_3();
}
color_4.onclick = function(){
    menuToggle_4();
}

function menuToggle_1() {
    document.getElementById('title').innerHTML = "กรุณาเลือกสีแถบที่ 1";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
    hideColor("none","none","block","block","block","block","block");
    color("color_1","line_1");
}

function menuToggle_2() {
    document.getElementById('title').innerHTML = "กรุณาเลือกสีแถบที่ 2";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
    hideColor("none","none","block","block","block","block","block");
    color("color_2","line_2");
}

function menuToggle_3() {
    document.getElementById('title').innerHTML = "กรุณาเลือกสี ตัวคูณ แถบที่ 3";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
    hideColor("block","block","block","block","block","none","none");
    color("color_3","line_3");
}

function menuToggle_4() {
    document.getElementById('title').innerHTML = "กรุณาเลือกสี เปอร์เซ็นต์ความคลาดเคลื่อน แถบที่ 4";
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
    hideColor("block","block","none","none","none","none","none");
    color("color_4","line_4");
}

function color(color,line){
    gold.onclick = function(){
        console.log("gold",line)
        document.getElementById(color).style.background = "gold";
        document.getElementById(line).style.background = "gold";
        resistor(0.1,color);
    }
    silver.onclick = function(){
        console.log("silver",line)
        document.getElementById(color).style.background = "silver";
        document.getElementById(line).style.background = "silver";
        resistor(0.01,color);
    }
    black.onclick = function(){
        console.log("black",line)
        document.getElementById(color).style.background = "black";
        document.getElementById(line).style.background = "black";
        resistor(0,color);
    }
    brown.onclick = function(){
        console.log("brown",line)
        document.getElementById(color).style.background = "brown";
        document.getElementById(line).style.background = "brown";
        resistor(1,color);
    }
    red.onclick = function(){
        console.log("red",line)
        document.getElementById(color).style.background = "red";
        document.getElementById(line).style.background = "red";
        resistor(2,color);
    }
    orange.onclick = function(){
        console.log("orange",line)
        document.getElementById(color).style.background = "orange";
        document.getElementById(line).style.background = "orange";
        resistor(3,color);
    }
    yellow.onclick = function(){
        console.log("yellow",line)
        document.getElementById(color).style.background = "yellow";
        document.getElementById(line).style.background = "yellow";
        resistor(4,color);
    }
    green.onclick = function(){
        console.log("green",line)
        document.getElementById(color).style.background = "green";
        document.getElementById(line).style.background = "green";
        resistor(5,color);
    }
    blue.onclick = function(){
        console.log("blue",line)
        document.getElementById(color).style.background = "rgb(0, 115, 255)";
        document.getElementById(line).style.background = "rgb(0, 115, 255)";
        resistor(6,color);
    }
    purple.onclick = function(){
        console.log("purple",line)
        document.getElementById(color).style.background = "purple";
        document.getElementById(line).style.background = "purple";
        resistor(7,color);
    }
    gray.onclick = function(){
        console.log("gray",line)
        document.getElementById(color).style.background = "gray";
        document.getElementById(line).style.background = "gray";
        resistor(8,color);
    }
    white.onclick = function(){
        console.log("white",line)
        document.getElementById(color).style.background = "white";
        document.getElementById(line).style.background = "white";
        resistor(9,color);
    }
}

function hideColor(GLD,SLV,BLK,ORN,YEL,GRY,WHT){
    gold.style.display = GLD;
    silver.style.display = SLV;
    black.style.display = BLK;
    orange.style.display = ORN;
    yellow.style.display = YEL;
    gray.style.display = GRY;
    white.style.display = WHT;
}

function tolerance_persent(result_tolerance){
    if(result_tolerance == 0.01){
        return tolerance = 10,"%";
    }
    else if(result_tolerance == 0.1){
        return tolerance = 5,"%";
    }
    else if(result_tolerance == 1){
        return tolerance = 1,"%";
    }
    else if(result_tolerance == 2){
        return tolerance = 2,"%";
    }
    else if(result_tolerance == 5){
        return tolerance = 0.5,"%";
    }
    else if(result_tolerance == 6){
        return tolerance = 0.25,"%";
    }
    else{
        return tolerance = 0.1,"%";
    }
}

function resistor(b,a){
    if(a == "color_1"){
        band_1 = b;
    }
    else if(a == "color_2"){
        band_2 = b;
    }
    else if(a == "color_3"){
        if(b == 0.1){
            multiplier = -1;
        }else if(b == 0.01){
            multiplier = -2;
        }else{
            multiplier = b;
        }
    }
    else if(a == "color_4"){
        tolerance_persent(b);
    }
    result.innerHTML = (((band_1*10) + band_2) *(10**multiplier)).toFixed(2) +" Ohms " + tolerance + "%";
}







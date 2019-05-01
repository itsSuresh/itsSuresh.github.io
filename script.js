var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var gradient = document.querySelector("h4");

function setGradient(){
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`;

    gradient.textContent=body.style.background +";";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

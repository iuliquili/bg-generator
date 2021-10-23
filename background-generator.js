var bg_css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBg = document.getElementById("body-bg");

function setBgr() {
    bodyBg.style.background = "linear-gradient(to right,"
    + color1.value +  ","
    + color2.value + ")";
    bg_css.textContent ="Your gradient: " + bodyBg.style.background + ";";
}
color1.addEventListener("input", setBgr);

color2.addEventListener("input", setBgr);

//Do not forget about input attribute that can call functions <3 oninput="setBgr()"

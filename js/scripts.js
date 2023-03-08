/* Navbar */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

let mode = "light"

function theme() {
    if (mode == "light") {
        document.getElementById("smh").classList.add("dark")
        document.getElementById("tmr").innerHTML = "Dark"
        mode = "dark"
    }
    else {
        document.getElementById("smh").classList.remove("dark")
        document.getElementById("tmr").innerHTML = "Light"
        mode = "light"
    }
}
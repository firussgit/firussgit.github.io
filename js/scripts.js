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
        mode = "dark"
        console.log(mode)
    }
    else {
        document.getElementById("smh").classList.remove("dark")
        mode = "light"
        console.log(mode)
    }
}
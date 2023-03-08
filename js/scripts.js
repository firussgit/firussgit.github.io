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
        document.getElementById("bdy").classList.add("dark")
        document.getElementById("clk").classList.remove("fa-sun")
        document.getElementById("clk").classList.add("fa-moon")
        mode = "dark"
    }
    else {
        document.getElementById("bdy").classList.remove("dark")
        document.getElementById("clk").classList.remove("fa-moon")
        document.getElementById("clk").classList.add("fa-sun")
        mode = "light"
    }
}
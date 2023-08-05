const nav = document.querySelector("nav");
const navas = document.querySelectorAll("nav a");
const checkScroll = () => {
    window.scrollY > 60 ? nav.style.backgroundColor = "#833838" : nav.style.backgroundColor = "transparent";
    navas.forEach(link => {
        window.scrollY > 60 ? link.style.color = "#fff" : link.style.color = "#833838";
    });
}
window.onscroll = checkScroll;
window.onload = checkScroll;
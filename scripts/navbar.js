const nav = document.querySelector("nav");
const navas = document.querySelectorAll("nav a");
const checkScroll = () => {
    window.scrollY > 60 ? nav.style.backgroundColor = "transparent" : nav.style.backgroundColor = "#833838";
    navas.forEach(link => {
        window.scrollY > 60 ? link.style.color = "#833838" : link.style.color = "#fff";
    });
}
window.onscroll = checkScroll;
window.onload = checkScroll;
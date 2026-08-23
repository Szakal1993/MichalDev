const menuBtn = document.querySelector(".nav__icon");
const menu = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links .link");
const year = document.querySelector("#year");

// Otwieranie menu
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

// Kliknięcie linku zamyka menu
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// Kliknięcie poza menu zamyka menu
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
    }
});

// Rok w stopce
if (year) {
    year.textContent = new Date().getFullYear();
}


// ==============================
// AKTYWNA SEKCJA
// ==============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active-link");

        if (currentSection && link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }
    });
});
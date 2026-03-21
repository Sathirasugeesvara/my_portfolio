const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");

    if(menuIcon.classList.contains("bx-menu")){
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
};

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    });
});

document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});
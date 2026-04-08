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


//for project section
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".modal-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const card = btn.closest(".project-card");
        modalTitle.innerText = card.dataset.title;
        modalDesc.innerText = card.dataset.desc;
        modalImg.src = card.dataset.img;
        modalLink.href = card.dataset.link;

        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

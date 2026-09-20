const menu = document.getElementById("menu");
const menuToggle = document.querySelector(".mobile-toggle");
const backToTop = document.querySelector(".back-to-top");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setMenuOpen(open) {
    menu.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("active")) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);
        document.querySelector(link.hash).focus({ preventScroll: true });
    });
});

function updateBackToTop() {
    backToTop.hidden = window.scrollY < 400;
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener("click", () => {
    document.getElementById("home").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
});

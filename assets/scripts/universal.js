// Set Page Theme on Load
window.addEventListener("DOMContentLoaded", () => {
    (localStorage.getItem("theme") == "dark") ? document.body.classList.add("dark-theme"): document.body.classList.remove("dark-theme");
});

// Remove Skeleton On load
window.addEventListener("load", () => {
    document.querySelectorAll(".skeleton").forEach(skeleton => {
        skeleton.classList.remove("skeleton");
    });
});

// Set Year For Copyright
document.querySelector("#year").textContent = new Date().getFullYear();

// Chnage To Dark Mode On Mode Toggle
document.querySelector(".mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.querySelector(".mode-toggle .fa-moon").classList.toggle("d-none");
    document.querySelector(".mode-toggle .fa-sun").classList.toggle("d-none");
    document.body.classList.contains("dark-theme") ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "");
});
// Set Page Theme on Load
window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("theme") == "dark") {
		document.body.classList.add("dark-theme");
		document
			.querySelector(".navbar-brand img")
			.setAttribute("src", "assets/media/logos/logo_full_light_text_trans.png");
		document
			.querySelector(".footer-col-1 img")
			.setAttribute("src", "assets/media/logos/logo_text_light_trans.png");
	} else {
		document.body.classList.remove("dark-theme");
		document
			.querySelector(".navbar-brand img")
			.setAttribute("src", "assets/media/logos/logo_full_dark_text_trans.png");
		document
			.querySelector(".footer-col-1 img")
			.setAttribute("src", "assets/media/logos/logo_text_dark_trans.png");
	}
});

// Remove Skeleton On load
window.addEventListener("load", () => {
	document.querySelectorAll(".skeleton").forEach((skeleton) => {
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

	if (document.body.classList.contains("dark-theme")) {
		localStorage.setItem("theme", "dark");
		document
			.querySelector(".navbar-brand img")
			.setAttribute("src", "assets/media/logos/logo_full_light_text_trans.png");
		document
			.querySelector(".footer-col-1 img")
			.setAttribute("src", "assets/media/logos/logo_text_light_trans.png");
	} else {
		localStorage.setItem("theme", "");
		document
			.querySelector(".navbar-brand img")
			.setAttribute("src", "assets/media/logos/logo_full_dark_text_trans.png");
		document
			.querySelector(".footer-col-1 img")
			.setAttribute("src", "assets/media/logos/logo_text_dark_trans.png");
	}
});

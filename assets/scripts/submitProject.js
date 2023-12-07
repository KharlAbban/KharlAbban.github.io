const submitSelect = document.querySelector("#submitSelect");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();

window.addEventListener("load", async () => {
	try {
		const fetchResult = await fetch(
			"https://kharlapi.onrender.com/api/category"
		);
		const categories = await fetchResult.json();
		console.log(categories.cats);

		categories.cats.forEach((category) => {
			let newOption = document.createElement("option");
			newOption.setAttribute("value", category.name);
			newOption.textContent = category.name;
			console.log(newOption);

			submitSelect.append(newOption);
		});
	} catch (err) {
		alert("Please refresh theis page!");
	}
});

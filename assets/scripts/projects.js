const projectsDiv = document.querySelector("#hp-projects-row");

window.addEventListener("load", async () => {
	try {
		// const result = await fetch("https://kharlapi.onrender.com/api/projects/");
		// const toJson = await result.json();
		const result = await fetch(
			"https://kharlapi.onrender.com/api/projects/projectImage-1701778468386.png"
		);
		const toBlob = await result.blob();
		console.log(toBlob);

		// const projects = toJson.projectList;
		console.log(projects);

		projects.forEach((project) => {
			let newChild = createProjectElement(project);
			console.log(newChild);
			projectsDiv.appendChild(newChild);
		});
	} catch (err) {
		console.log(err);
		alert("Please refresh this page!");
	}
});

async function createProjectElement(project) {
	let projectElement = document.createElement("div");
	projectElement.classList.add("col", "hp-project-col", "p-2");
	let projDisplayDiv = document.createElement("div");
	projDisplayDiv.classList.add("sample-project-display", "h-100");
	// projDisplayDiv.style.backgroundImage = await fetch(
	// 	`https://kharlapi.onrender.com/api/projects/${project.imageName}`
	// );
	let projDetailsDiv = document.createElement("div");
	projDisplayDiv.classList.add(
		"project-display-details",
		"h-100",
		"d-flex",
		"flex-column",
		"justify-content-center",
		"align-items-center",
		"px-2"
	);
	let projName = document.createElement("h2");
	projName.classList.add("project-name", "text-center");
	projName.textContent = project.name;
	let projBtnsDiv = document.createElement("div");
	projBtnsDiv.classList.add("btn-group", "gap-2", "my-2", "w-100");
	let projBtnOne = document.createElement("button");
	projBtnOne.classList.add("btn", "project-details-btn");
	projBtnOne.textContent = "View Live";
	let projBtnTwo = document.createElement("button");
	projBtnTwo.classList.add("btn", "project-details-btn");
	projBtnTwo.textContent = "See Source";

	projBtnsDiv.appendChild(projBtnOne);
	projBtnsDiv.appendChild(projBtnTwo);
	projDetailsDiv.appendChild(projName);
	projDetailsDiv.appendChild(projBtnsDiv);
	projDisplayDiv.appendChild(projDetailsDiv);
	projectElement.appendChild(projDisplayDiv);

	return projectElement;
}

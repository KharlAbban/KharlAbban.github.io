const projectsDiv = document.querySelector("#hp-projects-row");

window.addEventListener("load", async () => {
	try {
		const result = await fetch("https://kharlapi.onrender.com/api/projects/");
		const toJson = await result.json();

		const projects = toJson.projectList;
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

function createProjectElement(project) {
	let projectElement = document.createElement("div");
	projectElement.classList.add("col", "hp-project-col", "p-2");
	let projDisplayDiv = document.createElement("div");
	projDisplayDiv.classList.add("sample-project-display", "h-100");
	let projectDisplayImg = document.createElement("img");
	projectDisplayImg.src = project.imageurl;
	projectDisplayImg.classList.add("img-fluid","w-100","h-100");
	let projDetailsDiv = document.createElement("div");
	projDetailsDiv.classList.add(
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
	let projBtnOne = document.createElement("a");
	projBtnOne.classList.add("btn", "project-details-btn");
	projBtnOne.href = "https://" + project.liveSite;
	projBtnOne.target = "_blank";
	projBtnOne.textContent = "View Live";
	let projBtnTwo = document.createElement("a");
	projBtnTwo.classList.add("btn", "project-details-btn");
	projBtnTwo.href = "https://" + project.codeHub;
	projBtnTwo.target = "_blank";
	projBtnTwo.textContent = "See Source";

	projBtnsDiv.appendChild(projBtnOne);
	projBtnsDiv.appendChild(projBtnTwo);
	projDetailsDiv.appendChild(projName);
	projDetailsDiv.appendChild(projBtnsDiv);
	projDisplayDiv.appendChild(projectDisplayImg);
	projDisplayDiv.appendChild(projDetailsDiv);
	projectElement.appendChild(projDisplayDiv);

	return projectElement;
}

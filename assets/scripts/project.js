const urlParam = new URLSearchParams(window.location.search);
const projectId = urlParam.get("projectId");
console.log(projectId);

window.addEventListener("load", async () => {
    const result = await fetch(`https://kharlapi.onrender.com/api/projects/${projectId}`);
    const toJson = await result.json();

    document.querySelector("#crumbProjName").textContent = toJson.name;
    document.querySelector(".project-id").textContent = toJson.projectID;
    document.querySelector("#detProjName").textContent = toJson.name;
    document.querySelector(".status").textContent = toJson.status;
    document.querySelector(".cats").textContent = toJson.category;
    document.querySelector(".project-desc").textContent = toJson.description;
    document.querySelector(".project-live-btn").href = `${toJson.liveSite}`;
    document.querySelector(".project-github-btn").href = `${toJson.codeHub}`;
    document.querySelector(".detImg").src = `${toJson.imageurl}`;

});
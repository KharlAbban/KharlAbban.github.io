const urlParam = new URLSearchParams(window.location.search);
const projectId = urlParam.get("projectId");
console.log(projectId);
alert(projectId);
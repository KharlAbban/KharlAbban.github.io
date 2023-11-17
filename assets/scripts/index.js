const allSkeltons = document.querySelectorAll(".skeleton");

// Remove Skeleton On load
window.addEventListener("load", () => {
  allSkeltons.forEach(skeleton => {
    skeleton.classList.remove("skeleton");
  });
});

// Set Year For Copyright
document.querySelector("#year").textContent = new Date().getFullYear();
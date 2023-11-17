const allSkeltons = document.querySelectorAll(".skeleton");

window.addEventListener("load", () => {
  allSkeltons.forEach(skeleton => {
    skeleton.classList.remove("skeleton");
  });
});
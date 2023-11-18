// Remove Skeleton On load
window.addEventListener("load", () => {
  document.querySelectorAll(".skeleton").forEach(skeleton => {
    skeleton.classList.remove("skeleton");
  });
});
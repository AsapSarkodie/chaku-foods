let menu = document.querySelector("#menu");
let dropdown = document.querySelector(".dropdown");
menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu")) {
    dropdown.classList.toggle("show");
  }
});
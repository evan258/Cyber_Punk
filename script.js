const toggler = document.getElementById("toggler");
const navContainer = document.getElementById("nav-container");
const navUl = document.getElementById("nav-ul");
const navBtn = document.getElementById("nav-btn");

toggler.addEventListener("click", () => {
  navContainer.classList.toggle("flex-col");
  navContainer.classList.toggle("items-start");

  navUl.classList.toggle("hidden");
  navUl.classList.toggle("flex-col");

  navBtn.classList.toggle("hidden");
  navBtn.classList.toggle("block");
});

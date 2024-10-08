let button = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

button.addEventListener("click", function () {
  // Toggle both notActive and active classes
  navMenu.classList.toggle("notActive");
  navMenu.classList.toggle("active");

  console.log(navMenu); // For debugging
});

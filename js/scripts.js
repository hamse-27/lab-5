console.log("hello");

const  menuToggle = document.getElementById('menu-toggle');
const  menuNav = document.getElementById('menu-nav');

toggleMenu = () => {
  menuNav.classList.toggle("menu-toggle");
  console.log("called toggle menu");
}

menuToggle.addEventListener("click", toggleMenu);

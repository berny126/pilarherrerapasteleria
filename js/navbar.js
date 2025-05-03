function renderNavBar() {
  const navbarHTML = `<nav class="navbar">
      <img src="Logo.svg" alt="logo" width="271.98" height="137.82" />

      <ul class="nav-links">
        <li><a href="#home" class="nav-link ">Inicio</a></li>
        <li><a href="#products" class="nav-link ">Productos</a></li>
        <li><a href="#about-me" class="nav-link ">Sobre mi</a></li>
        <li><a href="#contact-us" class="nav-link ">Contáctenos</a></li>
      </ul>
      <button class="menu">☰</button>
    </nav>`;

  document.getElementById("navbar-container").innerHTML = navbarHTML;

  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelector("nav-link");

  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  });
}

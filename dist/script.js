function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectSection = document.querySelector('#projects');
const projectContainer = document.querySelector('#project-container');

window.addEventListener('resize', function () {
  if (projectContainer.offsetHeight > window.innerHeight) {
    projectSection.classList.add('h-fit');
    projectSection.classList.remove('h-[100vh]');
  } else {
    projectSection.classList.remove('h-fit');
    projectSection.classList.add('h-[100vh]');
  }
});
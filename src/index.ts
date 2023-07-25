const menuButton: HTMLButtonElement = document.querySelector(".menu-btn");
const navContainer: HTMLDivElement = document.querySelector(
    "header > .container > nav"
);

const toggleMenu = (event: MouseEvent) => {
    navContainer.classList.toggle("dropdown-menu");
    navContainer.classList.toggle("show-menu");
};

menuButton.addEventListener("click", toggleMenu);

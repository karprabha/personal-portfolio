const menuButton: HTMLButtonElement = document.querySelector(".menu-btn");
const navContainer: HTMLDivElement = document.querySelector(
    "header > .container > nav"
);

const navLinks: NodeListOf<HTMLElement> =
    navContainer.querySelectorAll<HTMLLIElement>("ul > li");

const toggleMenu = () => {
    navContainer.classList.toggle("show-menu");
};

menuButton.addEventListener("click", toggleMenu);
console.log(navLinks);

const isVisible = (node: HTMLElement) => {
    return node.classList.contains("hidden");
};

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        if (isVisible(menuButton)) {
            toggleMenu();
        }
    });
}

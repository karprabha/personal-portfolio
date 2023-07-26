const dropdownMenu = () => {
    const menuButton: HTMLButtonElement = document.querySelector(".menu-btn");
    const navContainer: HTMLDivElement = document.querySelector(
        "header > .container > nav"
    );

    const navLinks: NodeListOf<HTMLElement> =
        navContainer.querySelectorAll<HTMLLIElement>("ul > li");

    const isVisible = (node: HTMLElement) => {
        return node.checkVisibility();
    };

    const toggleMenu = () => {
        navContainer.classList.toggle("show-menu");
    };

    menuButton.addEventListener("click", toggleMenu);

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", () => {
            if (isVisible(menuButton)) {
                toggleMenu();
            }
        });
    }
};

export default dropdownMenu;

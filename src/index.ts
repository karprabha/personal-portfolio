import dropdownMenu from "./components/dropdown-menu";
import imageSlider from "./components/image-slider";

dropdownMenu();
imageSlider();

const toggleTheme = document.querySelector(".toggle-dark-mode");
const toggleThemeMobile = document.querySelector(".toggle-dark-mode-mobile");

const toggleThemeIcon = toggleTheme.querySelector(".icon");
const toggleThemeIconMobile = toggleThemeMobile.querySelector(".icon");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    toggleThemeIcon.classList.toggle("sun-icon");
    toggleThemeIconMobile.classList.toggle("sun-icon");
    document.body.classList.toggle("dark-theme");
} else {
    toggleThemeIcon.classList.toggle("moon-icon");
    toggleThemeIconMobile.classList.toggle("moon-icon");
    document.body.classList.toggle("light-theme");
}

const handleToggle = (element: Element) => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    element.classList.toggle("sun-icon");
    element.classList.toggle("moon-icon");
};

toggleTheme.addEventListener("click", () => handleToggle(toggleThemeIcon));
toggleThemeMobile.addEventListener("click", () =>
    handleToggle(toggleThemeIconMobile)
);

import dropdownMenu from "./components/dropdown-menu";
import imageSlider from "./components/image-slider";

dropdownMenu();
imageSlider();

const btn = document.getElementById("toggle-dark-mode");
const toggleThemeIcon = btn.querySelector(".icon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    toggleThemeIcon.classList.toggle("sun-icon");
    document.body.classList.toggle("dark-theme");
} else {
    toggleThemeIcon.classList.toggle("moon-icon");
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    toggleThemeIcon.classList.toggle("sun-icon");
    toggleThemeIcon.classList.toggle("moon-icon");
});

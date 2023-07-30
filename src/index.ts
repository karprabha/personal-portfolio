import dropdownMenu from "./components/dropdown-menu";
import imageSlider from "./components/image-slider";

dropdownMenu();
imageSlider();

const btn = document.getElementById("toggle-dark-mode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
});

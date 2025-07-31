export function scrollToSection(sectionName) {
    window.scrollTo(0, document.querySelector("." + sectionName).getBoundingClientRect().top + window.scrollY - 30);
}
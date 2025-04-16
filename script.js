function dark_mode() {
    const htmlElement = document.querySelector("html");
    if (htmlElement.getAttribute("data-bs-theme") === "dark") {
        htmlElement.removeAttribute("data-bs-theme");
    } else {
        htmlElement.setAttribute("data-bs-theme", "dark");
    }
}

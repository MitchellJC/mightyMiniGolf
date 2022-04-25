(function(){
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", () => {
        if (navLinks.classList.contains("nav-links-open")) {
            navLinks.classList.remove("nav-links-open");
        } else {
            navLinks.classList.add("nav-links-open");
        }
    });
})();
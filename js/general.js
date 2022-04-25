(function(){
    const navLinks = document.getElementById("nav-links");
    const burgerMenu = document.getElementById("burger-menu");
    const burgerMenuLine1 = document.getElementById("burger-menu-line-1");
    const burgerMenuLine2 = document.getElementById("burger-menu-line-2");
    const burgerMenuLine3 = document.getElementById("burger-menu-line-3");

    burgerMenu.addEventListener("click", () => {
        if (navLinks.classList.contains("nav-links-open")) {
            navLinks.classList.remove("nav-links-open");

            // Trigger animation for x to burger menu graphic
            burgerMenuLine1.classList.remove("line-1-to-x");
            burgerMenuLine2.classList.remove("line-2-to-x");
            burgerMenuLine3.classList.remove("line-3-to-x");
            burgerMenuLine1.offsetHeight; // trigger reflow 
            burgerMenuLine1.classList.add("line-1-to-burger");
            burgerMenuLine2.classList.add("line-2-to-burger");
            burgerMenuLine3.classList.add("line-3-to-burger");
        } else {
            navLinks.classList.add("nav-links-open");
            
            // Trigger animation for burger menu graphic to x
            burgerMenuLine1.classList.remove("line-1-to-burger");
            burgerMenuLine2.classList.remove("line-2-to-burger");
            burgerMenuLine3.classList.remove("line-3-to-burger");
            burgerMenuLine1.offsetHeight; // trigger reflow 
            burgerMenuLine1.classList.add("line-1-to-x");
            burgerMenuLine2.classList.add("line-2-to-x");
            burgerMenuLine3.classList.add("line-3-to-x");
        }
    });
})();
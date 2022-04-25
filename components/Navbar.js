const NAVBAR_HTML = 
`
<header>
<nav>
  <a class="home-link" href="index.html">
    <img class="home-logo" src="../images/golfball-50px.svg" alt="Golf ball">
    <span class="logo-text">Mighty Mini Golf</span>
  </a>

  <div id="burger-menu" class="burger-menu">
    <div id="burger-menu-line-1" class="burger-menu-line-1"></div>
    <div id="burger-menu-line-2" class="burger-menu-line-2"></div>
    <div id="burger-menu-line-3" class="burger-menu-line-3"></div>
  </div>

  <ul id="nav-links">
    <li><a id="about-link" href="about.html"><span class="nav-text">About</span></a></li>
    <li><a id="food-link" href="food.html"><span class="nav-text">Food and Drink</span></a></li>   
    <li><a id="contact-link" href="contact.html"><span class="nav-text">Contact</span></a></li>
    <li><a id="book-link" href="book.html"><span class="nav-text">Book</span></a></li>
  </ul>
</nav>
</header>
`;

/** Class representing Navbar. The navbar contains 
 * company logo and links to 
 * Home, About, Food, Contact and Booking pages.
 */
class Navbar extends HTMLElement {
    /** Initialise new Navbar instance */
    constructor() {
      super();
    }

    /** Runs everytime element is inserted into document object model. Sets html for Navbar element 
     * and sets the navbar link representing the current page to a class which marks it as the 
     * current-page-link for styling.
    */
    connectedCallback() {
      this.innerHTML = NAVBAR_HTML;
      
      let pageUrl = document.URL;
      if (pageUrl.includes("about")) {
        document.getElementById("about-link").classList.add("current-page-link");
      } else if (pageUrl.includes("food")) {
        document.getElementById("food-link").classList.add("current-page-link");
      } else if (pageUrl.includes("contact")) {
        document.getElementById("contact-link").classList.add("current-page-link");
      } else if (pageUrl.includes("book")) {
        document.getElementById("book-link").classList.add("current-page-link");
      }
      
      
    }

  }

  customElements.define('navbar-component', Navbar);
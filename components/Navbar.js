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
     * current page for styling.
    */
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
          <a class="home-link" href="index.html">
            <img class="home-logo" src="../images/golfball-50px.svg" alt="Golf ball">
            <h1>Mighty Mini Golf</h1>
          </a>

          <ul>
            <li><a id="about-link" href="about.html"><h4>About</h4></a></li>
            <li><a id="food-link" href="food.html"><h4>Food and Drink</h4></a></li>
            <li><a id="contact-link" href="contact.html"><h4>Contact</h4></a></li>
            <li><a id="book-link" href="book.html"><h4>Book</h4></a></li>
          </ul>
        </nav>
        </header>
      `;
      
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
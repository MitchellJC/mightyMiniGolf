class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    /** Runs everytime element is inserted into document object model. */
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
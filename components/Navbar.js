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
          <img class="home-logo" src="../images/golfball.svg" alt="Golf ball">
          <h3>Mighty Mini Golf</h3>
        </a>

        <ul>
          <li><a href="about.html"><h4>About</h4></a></li>
          <li><a href="food.html"><h4>Food and Drink</h4></a></li>
          <li><a href="contact.html"><h4>Contact</h4></a></li>
          <li><a href="book.html"><h4>Book</h4></a></li>
        </ul>
      </nav>
      </header>
    `;
    }
  }

  customElements.define('navbar-component', Navbar);
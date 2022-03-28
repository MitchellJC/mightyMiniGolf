class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    /** Runs everytime element is inserted into document object model. */
    connectedCallback() {
        this.innerHTML = `
      <header>
      <nav>
        <a href="index.html">Mighty Mini Golf</a>
        <img class="home-logo" src="../images/golfball.svg" alt="Golf ball">

        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="food.html">Food and Drink</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="book.html">Book</a></li>
        </ul>
      </nav>
      </header>
    `;
    }
  }

  customElements.define('navbar-component', Navbar);
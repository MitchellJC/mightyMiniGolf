class Footer extends HTMLElement {
    constructor() {
      super();
    }

    /** Runs everytime element is inserted into document object model. Sets html for Footer element.*/
    connectedCallback() {
        this.innerHTML = `
      <footer>
      <div class="content-container">
      <ul>
        <li><a href="index.html">Home Page</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="book.html">Book</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="food.html">Food and Drink</a></li>
        <li><a href="terms.html">Terms and Conditions</a></li>
      </ul>
      </div>
      </footer>
    `;
    }
  }

  customElements.define('footer-component', Footer);
const FOOTER_HTML = 
`
<footer>
<div class="content-container">
<ul>
  <li><a href="index.html">Home Page</a></li>
  <li><a href="about.html">About Us</a></li>
  <li><a href="book.html">Book</a></li>
  <li><a href="contact.html">Contact Us</a></li>
  <li><a href="food.html">Food and Drink</a></li>
  <li><a href="terms.html">Terms and Conditions</a></li>
  <li><a href="about.html#faq-section">FAQs</a></li>
  <li><a href="about.html#covid-section">Covid-10 Health and Safety</a></li>
</ul>
</div>
</footer>
`;

/** Class representing Footer. The footer contains 
 * links to 
 * Home, About, Food, Contact, Booking and Terms pages.
 */
class Footer extends HTMLElement {
    /** Initialise new Footer instance. */
    constructor() {
      super();
    }

    /** Runs everytime element is inserted into document object model. Sets html for Footer element.*/
    connectedCallback() {
        this.innerHTML = FOOTER_HTML;
    }
  }

  customElements.define('footer-component', Footer);
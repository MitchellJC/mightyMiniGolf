const FOOTER_HTML = 
`
<footer>
<div class="content-container">
<ul class="page-list">
    <li>
      <ul>
        <a class="footer-page" href="index.html">Home Page</a>
      </ul>
    </li>
    <li>
      <ul>
        <a class="footer-page" href="about.html">About Us</a>
        <li><a href="about.html#faq-section">FAQs</a></li>
        <li><a href="about.html#covid-section">Covid-19 Health and Safety</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <a class="footer-page" href="book.html">Book</a>
      </ul>
    </li>
    <li>
      <ul>
      <a class="footer-page" href="contact.html">Contact Us</a>
      </ul>
    </li>
    <li><a href="food.html">Food and Drink</a></li>
    <li><a href="terms.html">Terms and Conditions</a></li>
    
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
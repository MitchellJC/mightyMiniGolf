const FOOTER_HTML = 
`
<footer>
<div class="content-container">
  <div class="padding-div">
    <div class="footer-information-box">
      <a class="home-link" href="index.html">
        <img class="home-logo" src="../images/golfball-50px.svg" alt="Golf ball">
        <span class="logo-text">Mighty Mini Golf</span>
      </a>
      <p class="footer-information">23 Mills Street, Brisbane, Queensland(QLD), 4000</p>
      <p class="footer-information">minigolfenquiries@golf.com.au</p>
      <p class="footer-information">07 5550 9664 </p>
      
     
    </div>

    <ul class="page-list">
        <li>
          <a class="footer-page" href="index.html">Home Page</a>
          <ul>
            
          </ul>
        </li>
        <li>
          <a class="footer-page" href="about.html">About Us</a>
          <ul>
            <li><a href="about.html#faq-section">FAQs</a></li>
            <li><a href="about.html#covid-section">Covid-19 Health and Safety</a></li>
          </ul>
        </li>
        <li>
          <a class="footer-page" href="food.html">Food and Drink</a>
          <ul>
            <li><a href="food.html#menu-section">Our Menu</a></li>
          </ul>
        </li>
        <li>
          <a class="footer-page" href="contact.html">Contact Us</a>
          <ul>
            <li><a href="contact.html#message-section">Send Us a Message</a></li>
            <li><a href="contact.html#alt-contact-section">Alternative Ways to Contact Us</a></li>
          </ul>
        </li>
        <li>
          <a class="footer-page" href="book.html">Book</a>
          <ul>
          <li><a href="book.html#price-section">Our Prices</a></li>
          <li><a href="book.html#book-now-section">Book Now</a></li>
          </ul>
        </li>
        <li>
          <a class="footer-page" href="terms.html">Terms and Conditions</a
        </li>
    </ul>
    <p class="footer-information author-information">| Website made by Mitchell Clark |</p>
  </div>
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
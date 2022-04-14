const form = document.getElementById("contact-form");
const formHeight = form.getBoundingClientRect()["height"];

/** When submit event happens replace form with
 * message outlining details of contact form submission.
 * Shows the users inputted 
 * first name, last name, email and phone.
 */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    /** Collect form information into dictionary */
    let userInfo = {};
    for (field of form.elements) {
        userInfo[field.id] = field.value;
    }

    form.innerHTML= 
    `<p>
        Thank you for contacting us ${userInfo["contact-fname"]}, 
        one of our friendly team members will get back to you shortly. 
    </p>
    <ul class="contact-submit-list">
        <h3>Submitted Contact Details:</h3>
        <li><b>Your First Name:</b> ${userInfo["contact-fname"]}</li>
        <li><b>Your Last Name:</b> ${userInfo["contact-lname"]}</li>
        <li><b>Your Email:</b> ${userInfo["contact-email"]}</li>
        <li><b>Your Phone:</b> ${userInfo["contact-phone"]}</li>
    </ul>`;
    
    form.style.minHeight = `${formHeight}px`;
});
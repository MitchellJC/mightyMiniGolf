(function(){
    const form = document.getElementById("contact-form");
    const formHeight = form.getBoundingClientRect()["height"];
    const forSubmissionMessage = (firstName, lastName, email, phone) =>   
    `<p>
    Thank you for contacting us ${firstName}, 
    one of our friendly team members will get back to you shortly. 
    </p>
    <ul class="contact-submit-list">
    <h3>Submitted Contact Details:</h3>
    <li><b>Your First Name:</b> ${firstName}</li>
    <li><b>Your Last Name:</b> ${lastName}</li>
    <li><b>Your Email:</b> ${email}</li>
    <li><b>Your Phone:</b> ${phone}</li>
    </ul>`;

    /** When submit event happens replace form with
     * message outlining details of contact form submission.
     * Shows the users inputted 
     * first name, last name, email and phone.
     * Supresses regular form submission.
     */
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        /** Collect form information into dictionary */
        let userInfo = {};
        for (field of form.elements) {
            userInfo[field.id] = field.value;
        }

        form.innerHTML= forSubmissionMessage(
        userInfo["contact-fname"], 
        userInfo["contact-lname"], 
        userInfo["contact-email"], 
        userInfo["contact-phone"]);
        
        form.style.minHeight = `${formHeight}px`;
    });
})();
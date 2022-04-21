(function(){
    const form = document.getElementById("contact-form");
    const formHeight = form.getBoundingClientRect()["height"];
    const formSubmissionMessage = (firstName, lastName, email, phone, message) =>   
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
    <li><b>Your Message:</b> ${message}</li>
    </ul>`;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        /** Collect form information into dictionary */
        let userInfo = {};
        for (field of form.elements) {
            userInfo[field.id] = field.value;
        }

        form.style.minHeight = `${formHeight}px`;
        form.innerHTML= formSubmissionMessage(
        userInfo["contact-fname"], 
        userInfo["contact-lname"], 
        userInfo["contact-email"], 
        userInfo["contact-phone"],
        userInfo["contact-message"]);
    });
})();
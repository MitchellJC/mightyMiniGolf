(function(){
    const form = document.getElementById("book-form");
    const formHeight = form.getBoundingClientRect()["height"];
    const formSubmissionMessage = (firstName, lastName, email, phone, date,
        time, adultTickets, childTickets, concessionTickets, 
        partyTickets, holes, laserTag) =>   
    `<p>
    Thank you for booking with us ${firstName}. Please review your booking
    details below. 
    </p>
    <ul class="contact-submit-list">
    <h3>Booking Details:</h3>
    <li><b>Your First Name:</b> ${firstName}</li>
    <li><b>Your Last Name:</b> ${lastName}</li>
    <li><b>Your Email:</b> ${email}</li>
    <li><b>Your Phone:</b> ${phone}</li>
    <li><b>Date:</b> ${date}</li>
    <li><b>Time:</b> ${time}</li>
    <li><b>Adult Tickets:</b> ${adultTickets}</li>
    <li><b>Child Tickets:</b> ${childTickets}</li>
    <li><b>Concession Tickets:</b> ${concessionTickets}</li>
    <li><b>Party Tickets:</b> ${partyTickets}</li>
    <li><b>Holes:</b> ${holes}</li>
    <li><b>Laser Tag:</b> ${laserTag}</li>
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
        userInfo["book-fname"], 
        userInfo["book-lname"], 
        userInfo["book-email"], 
        userInfo["book-phone"],
        userInfo["book-date"],
        userInfo["book-time"],
        userInfo["adult-tickets"],
        userInfo["child-tickets"],
        userInfo["concession-tickets"],
        userInfo["party-tickets"],
        userInfo["book-holes"],
        userInfo["book-laser"]);
    });
})();
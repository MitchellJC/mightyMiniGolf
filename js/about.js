(function(){

    // CSS constants.
    const BLOCK = "block"
    const NONE = "None"

    const LI = "li"

    // Page text constants.
    const FAQ_1 = "Can I get a refund or change my booking?";
    const FAQ_2 = "faq_2";
    const ANSWER_1 = 
    `You can get a refund or change your
    booking upto 5 days before the date.`;
    const ANSWER_2 = 
    `Ans2`;

    const faqs = [FAQ_1, FAQ_2]
    const answers = [ANSWER_1, ANSWER_2]
    const faqHtmlList = document.getElementById("faq-list");

    faqsLength = faqs.length
    for (let questionNum = 1; questionNum <= faqsLength; questionNum++) {
        let question = faqs[questionNum - 1];
        let answer = answers[questionNum - 1];

        let htmlQuestion = document.createElement(LI);
        let htmlAnswer = document.createElement(LI);

        htmlQuestion.id = `faq${questionNum}`;
        htmlAnswer.id = `faq-answer${questionNum}`;

        htmlQuestion.innerText = question;
        htmlAnswer.innerText = answer;

        htmlAnswer.style.display = NONE;

        faqHtmlList.appendChild(htmlQuestion);
        faqHtmlList.appendChild(htmlAnswer);

        htmlQuestion.addEventListener('click', (_)=>{
            if (htmlAnswer.classList.contains("hidden")) {
                htmlAnswer.style.dis
            } else {
                
            }
        });
    }
})();
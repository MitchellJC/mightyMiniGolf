(function(){

    const faqs = document.getElementById("faq-list")
                         .getElementsByTagName("li");

    for (const faq of faqs) {
        const question = faq.getElementsByTagName("h3")[0];
        const answer = faq.getElementsByClassName("answer-box")[0];

        question.addEventListener("click", (event) => {
            answer.classList.add("faq-answer")
            if (answer.classList.contains("answer-box-open")) {
                answer.classList.remove("answer-box-open");
            } else {
                answer.classList.add("answer-box-open");
            }
        });
    }
})();
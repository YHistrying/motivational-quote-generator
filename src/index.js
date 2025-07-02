function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote-text", {
    strings: ["Generating your quote..."],
    autoStart: true,
    loop: false,
    cursor: "",
    delay: 75,
  });
}

let topicFrom = document.querySelector("#quote-topic");
topicFrom.addEventListener("submit", generateQuote);

function displayQuote(response) {
  new Typewriter("#quote-text", {
    strings: [response.data.answer],
    autoStart: true,
    loop: false,
    cursor: "",
    delay: 75,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructions = document.querySelector("#quotetopic-input");
  let key = "08dc473fat5683eb45d51fcd6703o645";
  let context =
    "You are a motivational speaker, generate a short motivational quote, no more than 20 words and seprate the quote and author by <br />. The author name must follow after a dash. The quote must be related to the user instructions";
  let prompt = `user instructions: generate a motivational or uplifting quote about ${instructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let generatingText = document.querySelector("#quote-text");
  generatingText.innerHTML = `Generating quote about ${instructions.value}...`;

  axios.get(apiUrl).then(displayQuote);
}

let topicFrom = document.querySelector("#quote-topic");
topicFrom.addEventListener("submit", generateQuote);

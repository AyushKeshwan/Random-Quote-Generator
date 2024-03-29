const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
let authorName = document.querySelector(".author .name");
let soundBtn = document.querySelector(".sound")
let copyBtn = document.querySelector(".copy")
let twitterBtn = document.querySelector(".twitter")


// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote..."
    // fetching random quotes/ data from the api and parsing it into js object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=> {
    // the SpeechSynthesisUtterance is a web speech api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
    // speak method of speechsynthesis speaks the utterance.
});

copyBtn.addEventListener("click", () => {
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system  clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});



quoteBtn.addEventListener("click", randomQuote);

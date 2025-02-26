const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote From API
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor || 'Unknown';

        // Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;

    } catch (error) {
        console.error("Error fetching quote:", error);
        getQuote(); // Fetch a new quote if an error occurs
        
        
    }
}




// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    getQuote(); // Fetch first quote on page load

    // Add event listener for the button to fetch a new quote
    newQuoteBtn.addEventListener('click', getQuote);
});

getQuote(); // Fetch first quote on page load

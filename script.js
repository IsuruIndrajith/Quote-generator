// Get Quote From API
async function getQuote() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = encodeURIComponent('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
    
    try{
        const response = await fetch(proxyUrl + apiUrl);

        // returning the above response in json Format
        const data = await response.json();

        // The response comes wrapped, so you'll need to parse the contents
        const quote = JSON.parse(data.contents);

        console.log(quote);

    }catch(error){
        console.log('whoops, no quote', error);
    }

} 

// On Load
// Calling the above function
getQuote();

// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var text = document.querySelector('.quote-text')
var author = document.querySelector('.quote-author')
var new_quote = document.querySelector('.new-quote')

function getQuote() {
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data)
            console.log(data.quoteText)
            text.textContent = (data.quoteText)
            
            console.log(data.quoteAuthor)
            author.textContent = (data.quoteAuthor)
        },
    })
    error:(function (error) {
        console.log(error);

        
    })
}

getQuote()

new_quote.addEventListener('click',function(e){
    getQuote()

})
let quote = document.getElementById("quote");
let author = document.getElementById("author");

let btnTwitter = document.getElementById("twitter");
let btnTumblr = document.getElementById("tumblr");
let newQuote = document.getElementById("new-quote");

let arrayQuote  = [];


newQuote.addEventListener("click", function(){
    quote.innerHTML = " ";
    author.innerHTML = " ";
})

//btn-social
btnTwitter.addEventListener("click", function(){
    window.open('https://x.com/');
})


btnTumblr.addEventListener("click", function(event){
    window.open('https://www.tumblr.com/');
})

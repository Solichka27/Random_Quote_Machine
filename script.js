let quote = document.getElementById("quote");
let author = document.getElementById("author");

let btnTwitter = document.getElementById("twitter");
let btnTumblr = document.getElementById("tumblr");
let newQuote = document.getElementById("new-quote");

let arrayQuote  = [
    "The self is put together by thought. Thought is not yours or mine; thinking is not individual thinking. Thinking is shared by all human beings. — Krishnamurti",
    "A rose by any other name would smell as sweet — William Shakespeare",
    "Ask not what your country can do for you; ask what you can do for your country. — John Kennedy",
    "Eighty percent of success is showing up. — Woody Allen",
    "Genius is one percent inspiration and ninety-nine percent perspiration. — Thomas Edison",
    "He travels the fastest who travels alone. — Rudyard Kipling",
    "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. — Martin Luther King",
    "If you want something said, ask a man; if you want something done, ask a woman. — Margaret Thatcher",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
    "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
    "That’s one small step for a man, a giant leap for mankind. — Neil Armstrong",
    "The only thing we have to fear is fear itself. — Franklin D. Roosevelt",
    "Tis better to have loved and lost than never to have loved at all.  - Alfred Lord Tennyson"
];


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

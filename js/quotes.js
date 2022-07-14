const quotes = [
{
    quote : "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    author : "Albert Einstein"
},
{
    quote : "“I have not failed. I've just found 10,000 ways that won't work.”",
    author : "Thomas A. Edison"
},
{
    quote : "“To the well-organized mind, death is but the next great adventure.”",
    author : "J.K. Rowling"
},
{
    quote : "“It is never too late to be what you might have been.”",
    author : "George Eliot"
},
{
    quote : "“Only in the darkness can you see the stars.”",
    author : "Martin Luther King Jr."
},
{
    quote : "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author : "Mark Twain"
},
{
    quote : "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    author : "Albert Einstein"
},
{
    quote : "“The way get started is to quit talking and begin doing.”",
    author : "Walt Disney"
},
{
    quote : "“Success is walking from failure to failure with no loss of enthusiasm.”",
    author : "Winston Churchill"
},
{
    quote : "“Vēnī. Vīdī. Vīcī.”",
    author : "Gaius Julius Caesar"
},
{
    quote : "“Victory belongs to the most persevering.”",
    author : "Napoleon Bonaparte"
},
{
    quote : "“We need men who can dream of things that never were.”",
    author : "John F. Kennedy"
},
{
    quote : "“Everything comes to him who hustles while he waits.”",
    author : "Thomas A. Edison"
},
{
    quote : "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
    author : "Mahatma Gandhi"
},
{
    quote : "“If you can make a woman laugh, you can make her do anything.”",
    author : "Marilyn Monroe"
},
];

const QUOTES = document.querySelector("#quote_box span:first-child");
const AUTHOR = document.querySelector("#quote_box span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * (quotes.length))]

QUOTES.innerText = todaysQuote.quote;
AUTHOR.innerText = todaysQuote.author;

// Math.round(), Math.ceil(), Math.floor()
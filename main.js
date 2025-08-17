const quotesArray = [
  {
    author: "― Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "― Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "― Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "― Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "― Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "― Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    author: "― C.S. Lewis, The Four Loves",
    quote:
      "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself ",
  },
  {
    author: "― Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    author:"― Oscar Wilde",
    quote:"Always forgive your enemies; nothing annoys them so much.",
  },
  
];

const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");
const newQuoteBtn = document.getElementById("newQuoteBtn");




function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quoteObj = quotesArray[randomIndex];
  quoteOutput.textContent = quoteObj.quote;
  authorOutput.textContent = quoteObj.author;
}

newQuoteBtn.addEventListener("click", getRandomQuote);

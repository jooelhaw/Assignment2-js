var quotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,
  `“So many books, so little time.”
― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`
];
// save default quote in the local storage
localStorage.setItem('default_quote', quotes[0]);
var default_quote = localStorage.getItem('default_quote');

var cartouna = `<p>${default_quote}</p>`;
// catch quotes container
var quotes_container = document.getElementById('displayQuotes');
quotes_container.innerHTML = cartouna;
var lastIndex = 0;
function getNewQuote() {
  var index = getRandomIndex();
  while (index == lastIndex)
  {
    index = getRandomIndex();
  }
  cartouna = `<p>${quotes[index]}</p>`;
  lastIndex = index;
  quotes_container.innerHTML = cartouna;
}

function getRandomIndex()
{
  return Math.trunc(Math.random() * 10);
}
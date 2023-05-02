const quotes = [
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해',
    author: '찰리채플린',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    author: '앙드레 말로',
  },
  {
    quote: ' 마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.',
    author: '이소룡',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const todaysQuote = quotes[random(0, 2)];
quote.innerText = todaysQuote['quote'];
author.innerText = todaysQuote['author'];

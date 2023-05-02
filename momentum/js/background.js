const images = ['0.jpg', '1.JPG', '2.JPG'];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);

console.log(bgImg);

const imageList = ["image1.jpg","image2.jpeg","image3.jpg","image4.jpg","image5.png"];

const choosenimage = imageList[Math.floor(Math.random() * imageList.length)]

const element = document.createElement("img")
element.src = `img/${choosenimage}`;

element.classList.add("bg-image");

document.body.appendChild(element);
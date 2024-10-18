const header = document.getElementById("header");
const heading = document.getElementById("main-heading");
const basketHeading = document.getElementById("basket-heading");
const thanksDiv = document.getElementById('thanks');

heading.textContent = "Fruit World";
heading.style.color = "orange";

header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange";

basketHeading.style.color = "green";

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Please visit us again';
thanksDiv.appendChild(newParagraph);
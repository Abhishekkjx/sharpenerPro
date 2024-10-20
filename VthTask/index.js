const headerDiv = document.getElementById('header');
const subHeading = document.createElement('h3');
const textNode = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(textNode);

subHeading.style.fontStyle = 'italic';

headerDiv.appendChild(subHeading);

const secondDiv = document.getElementsByTagName('div')[1];
const paragraph = document.createElement('p');
const paragraphText = document.createTextNode('Total fruits: 4');
paragraph.appendChild(paragraphText);
paragraph.setAttribute('id', 'fruits-total');
const ul = document.getElementsByClassName('fruits')[0];
secondDiv.insertBefore(paragraph, ul);
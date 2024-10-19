const mainHeading = document.querySelector('#main-heading');
const fruitsItem = document.querySelector('.fruits');
const basketHeading = document.querySelector('#basket-heading');
const fruit = document.querySelectorAll('.fruit');
// mainHeading.style.float = 'right'
 mainHeading.style.textAlign = 'right';

basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

fruitsItem.style.backgroundColor = 'gray';
fruitsItem.style.listStyleType = 'none';
fruitsItem.style.marginLeft = '30px'
fruitsItem.style.width = '50%';
fruitsItem.style.padding = '30px';
fruitsItem.style.borderRadius = '5px';

for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor = 'white';
  fruit[i].style.margin = '10px';
  fruit[i].style.padding = '10px';
  fruit[i].style.borderRadius = '5px'
}


const fruitEvenItem = document.querySelectorAll('.fruit:nth-child(even)');
for(let i = 0;i<fruitEvenItem.length;i++){
  fruitEvenItem[i].style.color = 'white';
  fruitEvenItem[i].style.backgroundColor = 'brown'
}
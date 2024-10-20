const form = document.querySelector('form');
const fruit = document.querySelector('.fruits');
const fruits = document.querySelectorAll('.fruits li');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const addfruit = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  newLi.innerHTML = addfruit.value + '<button class="delete-btn">x</button>';
  fruit.appendChild(newLi);

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  const text = document.createTextNode('Edit');
  editBtn.appendChild(text);
  newLi.appendChild(editBtn);

  addfruit.value = '';
});

fruit.addEventListener('click', function(event) {
  if(event.target.classList.contains('delete-btn')) {
    const deleteFruit = event.target.parentElement;
    fruit.removeChild(deleteFruit);
  }
});


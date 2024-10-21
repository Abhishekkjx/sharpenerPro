const form = document.querySelector('form');
const fruitList = document.querySelector('.fruits');
const filterInput = document.getElementById('filter');

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';
form.insertBefore(descriptionInput, form.querySelector('button'));

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fruitName = document.getElementById('fruit-to-add').value;
  const fruitDescription = document.getElementById('description').value;

  const newLi = document.createElement('li');
  newLi.className = 'fruit-item';
  newLi.innerHTML = fruitName + '<button class="delete-btn">x</button>';

  const descriptionPara = document.createElement('p');
  descriptionPara.innerHTML = '<i>' + fruitDescription + '</i>'; // Changed to <i>
  newLi.appendChild(descriptionPara);

  fruitList.appendChild(newLi);

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  newLi.appendChild(editBtn);

  document.getElementById('fruit-to-add').value = '';
  document.getElementById('description').value = '';
});

fruitList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const deleteFruit = event.target.parentElement;
    fruitList.removeChild(deleteFruit);
  }
});

filterInput.addEventListener('keyup', function(event) {
  const filterValue = event.target.value.toLowerCase();
  const fruitItems = document.querySelectorAll('.fruit-item');

  fruitItems.forEach(function(fruitItem) {
    const fruitName = fruitItem.firstChild.textContent.toLowerCase();
    const fruitDescription = fruitItem.querySelector('p').textContent.toLowerCase();

    if (fruitName.includes(filterValue) || fruitDescription.includes(filterValue)) {
      fruitItem.style.display = '';
    } else {
      fruitItem.style.display = 'none';
    }
  });
});



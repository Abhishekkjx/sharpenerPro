
const form = document.querySelector('form');
const userList = document.querySelector('ul');

function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${username}</strong> - ${email} - ${phone}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
  `;

  userList.appendChild(li);

  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';

  saveToLocalStorage();
}

userList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.parentElement;
    userList.removeChild(li);
    saveToLocalStorage();
  }

  if (event.target.classList.contains('edit-btn')) {
    const li = event.target.parentElement;
    const [name, email, phone] = li.firstChild.textContent.split(' - ');

    document.getElementById('username').value = name.trim();
    document.getElementById('email').value = email.trim();
    document.getElementById('phone').value = phone.trim();

    userList.removeChild(li);
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  const users = [];
  userList.querySelectorAll('li').forEach(function (item) {
    const [name, email, phone] = item.firstChild.textContent.split(' - ');
    users.push({ name: name.trim(), email: email.trim(), phone: phone.trim() });
  });
  localStorage.setItem('users', JSON.stringify(users));
}

function loadFromLocalStorage() {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  storedUsers.forEach(function (user) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${user.name}</strong> - ${user.email} - ${user.phone}
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    `;
    userList.appendChild(li);
  });
}

// Initial load
loadFromLocalStorage();
